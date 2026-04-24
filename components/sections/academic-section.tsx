"use client"

import { motion } from "framer-motion"

const educationItems = [
	{
		title: "B.Tech Computer Science and Engineering (AI)",
		institute: "Poornima Institute of Engineering and Technology",
		duration: "2023 - 2027",
		location: "Jaipur, India",
		detail: "CGPA: 8.01 / 10",
	},
]

export default function AcademicSection() {
	return (
		<section id="education" className="section-padding">
			<div className="container-custom">
				<div className="mx-auto max-w-4xl">
					<p className="section-eyebrow">Education</p>
					<h2 className="section-title mb-10">Academic Background</h2>
					<div className="relative border-l border-zinc-300 pl-8">
						{educationItems.map((item, index) => (
							<motion.article
								key={item.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.4 }}
								transition={{ duration: 0.5, delay: index * 0.08 }}
								className="mb-10"
							>
								<span className="absolute -left-[6px] mt-2 h-3 w-3 rounded-full bg-zinc-800" />
								<h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
								<p className="mt-1 text-base text-zinc-700 dark:text-zinc-300">{item.institute}</p>
								<p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
									{item.duration} · {item.location}
								</p>
								<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.detail}</p>
							</motion.article>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
