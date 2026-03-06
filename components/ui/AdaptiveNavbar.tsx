"use client";

import React, { useState, useRef, useEffect } from 'react'
import { motion, useSpring, AnimatePresence } from 'framer-motion'

interface NavItem {
    label: string
    id: string
}

/**
 * 3D Adaptive Navigation Pill
 * Smart navigation with scroll detection and hover expansion
 */
export const AdaptiveNavbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home')
    const [expanded, setExpanded] = useState(false)
    const [hovering, setHovering] = useState(false)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const prevSectionRef = useRef('home')

    const navItems: NavItem[] = [
        { label: 'Home', id: 'hero' },
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Experience', id: 'experience' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
    ]

    // Spring animations for smooth motion
    const pillWidth = useSpring(140, { stiffness: 220, damping: 25, mass: 1 })
    const pillShift = useSpring(0, { stiffness: 220, damping: 25, mass: 1 })

    // Scroll detection to update activeSection
    useEffect(() => {
        const sectionIds = navItems.map(i => i.id);
        const observers = sectionIds.map(id => {
            const el = document.getElementById(id);
            if (!el) return null;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                { threshold: 0.4 }
            );
            obs.observe(el);
            return obs;
        });
        return () => observers.forEach(o => o?.disconnect());
    }, []);

    // Handle hover expansion
    useEffect(() => {
        if (hovering) {
            setExpanded(true)
            pillWidth.set(650) // Increased width for 6 items
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current)
            }
        } else {
            hoverTimeoutRef.current = setTimeout(() => {
                setExpanded(false)
                pillWidth.set(140)
            }, 600)
        }

        return () => {
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current)
            }
        }
    }, [hovering, pillWidth])

    const handleMouseEnter = () => {
        setHovering(true)
    }

    const handleMouseLeave = () => {
        setHovering(false)
    }

    const handleSectionClick = (sectionId: string) => {
        // Trigger transition state
        setIsTransitioning(true)
        prevSectionRef.current = sectionId
        setActiveSection(sectionId)

        // Smooth scroll to section
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }

        // Collapse the pill after selection
        setHovering(false)

        // Reset transition state after animation completes
        setTimeout(() => {
            setIsTransitioning(false)
        }, 400)
    }

    const activeItem = navItems.find(item => item.id === activeSection)

    return (
        <motion.nav
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] relative rounded-full"
            style={{
                width: pillWidth,
                height: '56px',
                background: `
          linear-gradient(135deg, 
            #18181b 0%, 
            #09090b 100%
          )
        `,
                boxShadow: expanded
                    ? `
            0 2px 4px rgba(0, 0, 0, 0.4),
            0 6px 12px rgba(0, 0, 0, 0.6),
            0 12px 24px rgba(0, 0, 0, 0.7),
            0 24px 48px rgba(0, 0, 0, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.1),
            inset 0 -1px 2px rgba(0, 0, 0, 0.5)
          `
                    : isTransitioning
                        ? `
            0 3px 6px rgba(0, 0, 0, 0.3),
            0 8px 16px rgba(0, 0, 0, 0.2),
            inset 0 1px 1px rgba(255, 255, 255, 0.08)
          `
                        : `
            0 3px 6px rgba(0, 0, 0, 0.4),
            0 8px 16px rgba(0, 0, 0, 0.3),
            inset 0 1px 1px rgba(255, 255, 255, 0.1)
          `,
                x: pillShift,
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease-out',
                border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
        >
            {/* Primary top edge ridge - ultra bright */}
            <div
                className="absolute inset-x-0 top-0 rounded-t-full pointer-events-none"
                style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 100%)',
                }}
            />

            {/* Navigation items container */}
            <div
                ref={containerRef}
                className="relative z-10 h-full flex items-center justify-center px-6"
                style={{
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro", Poppins, sans-serif',
                }}
            >
                {/* Collapsed state - show only active section with smooth text transitions */}
                {!expanded && (
                    <div className="flex items-center relative">
                        <AnimatePresence mode="wait">
                            {activeItem && (
                                <motion.span
                                    key={activeItem.id}
                                    initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                                    transition={{
                                        duration: 0.35,
                                        ease: [0.4, 0.0, 0.2, 1]
                                    }}
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: '#fafafa',
                                        letterSpacing: '0.4px',
                                        whiteSpace: 'nowrap',
                                        fontFamily: 'Inter, system-ui, sans-serif',
                                        WebkitFontSmoothing: 'antialiased',
                                    }}
                                >
                                    {activeItem.label}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>
                )}

                {/* Expanded state - show all sections with stagger */}
                {expanded && (
                    <div className="flex items-center justify-evenly w-full gap-2">
                        {navItems.map((item, index) => {
                            const isActive = item.id === activeSection

                            return (
                                <motion.button
                                    key={item.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{
                                        delay: index * 0.08,
                                        duration: 0.25,
                                        ease: 'easeOut'
                                    }}
                                    onClick={() => handleSectionClick(item.id)}
                                    className="relative cursor-pointer transition-all duration-200"
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: isActive ? 600 : 400,
                                        color: isActive ? '#fafafa' : '#71717a',
                                        textDecoration: 'none',
                                        letterSpacing: '0.3px',
                                        background: 'transparent',
                                        border: 'none',
                                        padding: '8px 12px',
                                        outline: 'none',
                                        whiteSpace: 'nowrap',
                                        WebkitFontSmoothing: 'antialiased',
                                        transform: isActive ? 'translateY(-1px)' : 'translateY(0)',
                                    }}
                                >
                                    {item.label}
                                </motion.button>
                            )
                        })}
                    </div>
                )}
            </div>
        </motion.nav>
    )
}
