"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo } from "@/data/content";
// Removed emailjs import - using API route instead

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Form validation
    const formData = new FormData(formRef.current);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Check for empty fields
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-40 mt-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-16 text-white relative inline-block">
            Contact
            <span className="absolute -bottom-2 left-0 w-20 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
          </h2>

          <div className="max-w-4xl grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-sm font-medium mb-3 text-accent uppercase tracking-wider">
                  Email
                </h3>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-white hover:text-accent transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-3 text-accent uppercase tracking-wider">
                  Phone
                </h3>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-white hover:text-accent transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-3 text-accent uppercase tracking-wider">
                  Links
                </h3>
                <div className="space-y-2">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white hover:text-accent transition-colors"
                  >
                    LinkedIn →
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white hover:text-accent transition-colors"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-heading font-bold mb-6 text-white">
                Send me a message
              </h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-accent">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded focus:border-white/30 focus:outline-none transition-colors text-white placeholder:text-text/30"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-accent">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded focus:border-white/30 focus:outline-none transition-colors text-white placeholder:text-text/30"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-accent">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded focus:border-white/30 focus:outline-none transition-colors resize-none text-white placeholder:text-text/30"
                  />
                </div>

                {status === "success" && (
                  <div className="p-3 bg-green-500/10 border border-green-500/30 rounded text-green-400 text-sm">
                    Message sent successfully!
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm">
                    Failed to send message. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-6 py-3 bg-white text-bg rounded font-medium hover:bg-neutral-800 hover:text-white hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {status === "sending" && "Sending..."}
                  {status === "success" && "Message Sent ✓"}
                  {status === "error" && "Try Again"}
                  {status === "idle" && "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
