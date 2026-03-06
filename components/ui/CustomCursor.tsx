"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { damping: 28, stiffness: 220, mass: 0.5 };
    const cursorX = useSpring(-100, springConfig);
    const cursorY = useSpring(-100, springConfig);

    useEffect(() => {
        // Hide the native cursor globally
        document.body.style.cursor = "none";
        document.documentElement.style.cursor = "none";

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        const attachListeners = () => {
            const interactiveEls = document.querySelectorAll(
                'a, button, [role="button"], input, textarea, select, label, .cursor-pointer'
            );
            interactiveEls.forEach((el) => {
                el.addEventListener("mouseenter", handleHoverStart);
                el.addEventListener("mouseleave", handleHoverEnd);
            });
            return interactiveEls;
        };

        window.addEventListener("mousemove", moveCursor);
        const elements = attachListeners();

        // Re-attach after a short delay to catch dynamically rendered elements
        const timeout = setTimeout(() => attachListeners(), 1500);

        return () => {
            document.body.style.cursor = "";
            document.documentElement.style.cursor = "";
            window.removeEventListener("mousemove", moveCursor);
            clearTimeout(timeout);
            elements.forEach((el) => {
                el.removeEventListener("mouseenter", handleHoverStart);
                el.removeEventListener("mouseleave", handleHoverEnd);
            });
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div
            className="fixed inset-0 pointer-events-none z-[9999] hidden md:block"
            style={{ mixBlendMode: "difference" }}
        >
            {/* Outer ring — lags slightly for a silky feel */}
            <motion.div
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    x: "-50%",
                    y: "-50%",
                    opacity: isVisible ? 1 : 0,
                }}
                animate={{
                    scale: isHovering ? 1.6 : 1,
                    backgroundColor: isHovering
                        ? "rgba(255,255,255,0.15)"
                        : "rgba(255,255,255,0)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                className="absolute w-8 h-8 rounded-full border border-white"
            />

            {/* Inner dot — snaps to cursor position quickly */}
            <motion.div
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    x: "-50%",
                    y: "-50%",
                    opacity: isVisible ? 1 : 0,
                }}
                animate={{ scale: isHovering ? 0 : 1 }}
                transition={{ duration: 0.15 }}
                className="absolute w-1.5 h-1.5 rounded-full bg-white"
            />
        </div>
    );
}
