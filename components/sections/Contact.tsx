"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo } from "@/data/content";

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Client-side validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("sending");

    try {
      // Add Web3Forms access key to form data
      formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!);
      
      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error('Web3Forms error:', result);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: "LinkedIn",
      value: "Connect with me",
      href: personalInfo.linkedin,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      label: "GitHub",
      value: "View my work",
      href: personalInfo.github,
    },
  ];

  return (
    <section id="contact" ref={ref} className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section header */}
          <div className="mb-20 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-caption text-indigo-400 mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-heading-1 mb-6"
            >
              Let's Build Something <span className="accent-gradient">Amazing</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-body text-zinc-400 max-w-2xl mx-auto"
            >
              Ready to discuss your next project? I'm always excited to collaborate on innovative solutions and bring ideas to life.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact methods */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="text-heading-3 text-white mb-8">Contact Information</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      className="glass-card rounded-xl p-4 flex items-center gap-4 group hover:scale-[1.02] transition-all"
                    >
                      <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/30 transition-colors">
                        {method.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-caption text-zinc-400 mb-1">{method.label}</p>
                        <p className="text-body text-white group-hover:text-indigo-300 transition-colors truncate">
                          {method.value}
                        </p>
                      </div>
                      <svg className="w-5 h-5 text-zinc-600 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick response note */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-body font-medium text-white mb-2">Quick Response</h4>
                    <p className="text-body-small text-zinc-400">
                      I typically respond within 24 hours. For urgent matters, feel free to call directly.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="glass-card rounded-2xl p-8"
              >
                <h3 className="text-heading-3 text-white mb-8">Send a Message</h3>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Web3Forms Configuration */}
                  <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />
                  <input type="hidden" name="subject" value="New Portfolio Contact Form Submission" />
                  <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-caption text-zinc-400 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-white placeholder:text-zinc-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-caption text-zinc-400 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-white placeholder:text-zinc-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-caption text-zinc-400 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell me about your project or how I can help..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none text-white placeholder:text-zinc-500"
                    />
                  </div>

                  {/* Status messages */}
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3"
                    >
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-green-400 text-body-small">Message sent successfully! I'll get back to you soon.</p>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3"
                    >
                      <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-red-400 text-body-small">Failed to send message. Please try again or contact me directly.</p>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full premium-button disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : status === "success" ? (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
