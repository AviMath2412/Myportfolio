"use client";

import { NavBar } from "@/components/ui/tubelight-navbar"
import { Home, User, Briefcase, Trophy, Mail } from "lucide-react"

const navItems = [
  { name: "Home",         url: "#hero",         icon: Home },
  { name: "About",        url: "#about",        icon: User },
  { name: "Projects",     url: "#projects",     icon: Briefcase },
  { name: "Achievements", url: "#achievements", icon: Trophy },
  { name: "Contact",      url: "#contact",      icon: Mail },
]

export default function Navigation() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      {/* Date — truly fixed, never moves */}
      <div className="fixed top-5 left-0 z-[101] pointer-events-none px-6 md:px-10">
        <p className="hidden font-mono text-xs text-zinc-500 md:block select-none">
          {new Date().toLocaleDateString("en-US", {
            weekday: "short", month: "short", day: "numeric", year: "numeric",
          })}
        </p>
      </div>

      {/* Navbar — centered, fixed */}
      <div className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
        <div className="flex justify-center pt-4 pointer-events-auto">
          <NavBar items={navItems} />
        </div>
      </div>
    </>
  );
}
