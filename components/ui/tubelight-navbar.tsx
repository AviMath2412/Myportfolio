"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-detect active section on scroll
  useEffect(() => {
    const sections = items.map(item => item.url.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const name = items.find(i => i.url === `#${entry.target.id}`)?.name
            if (name) setActiveTab(name)
          }
        })
      },
      { threshold: 0.5 }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [items])

  return (
    <div className={cn(
      "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-4",
      className
    )}>
      <div className="flex items-center gap-1 bg-black/20 border border-white/10 backdrop-blur-xl py-1 px-1 rounded-full shadow-lg shadow-black/20">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200",
                isActive
                  ? "text-white"
                  : "text-zinc-400 hover:text-zinc-200"
              )}
            >
              {/* Desktop: text label */}
              <span className="hidden md:inline">{item.name}</span>
              {/* Mobile: icon only */}
              <span className="md:hidden">
                <Icon size={16} strokeWidth={2} />
              </span>

              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/5 rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                >
                  {/* Tubelight glow effect */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-indigo-400 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-indigo-400/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-indigo-400/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-indigo-400/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
