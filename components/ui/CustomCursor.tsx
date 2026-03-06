"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleHover = () => setIsHovering(true);
        const handleUnhover = () => setIsHovering(false);

        window.addEventListener("mousemove", moveCursor);

        const interactiveElements = document.querySelectorAll(
            'a, button, [role="button"], input, textarea, .cursor-pointer'
        );

        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleHover);
            el.addEventListener("mouseleave", handleUnhover);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleHover);
                el.removeEventListener("mouseleave", handleUnhover);
            });
        };
    }, [cursorX, cursorY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block">
            {/* Outer Circle */}
            <motion.div
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    x: "-50%",
                    y: "-50%",
                }}
                className="absolute w-8 h-8 rounded-full border border-white opacity-50"
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
            />
            {/* Inner Dot */}
            <motion.div
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    x: "-50%",
                    y: "-50%",
                }}
                className="absolute w-1 h-1 rounded-full bg-white"
                animate={{
                    scale: isHovering ? 2 : 1,
                }}
            />
        </div>
    );
}
