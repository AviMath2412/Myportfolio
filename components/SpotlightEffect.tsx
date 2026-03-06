"use client";

import { useEffect } from "react";

// Keep existing SpotlightEffect but just make it a no-op if DottedSurface was handling it
// OR replace with this minimal cursor glow:

export default function SpotlightEffect() {
  useEffect(() => {
    const el = document.createElement("div");
    el.style.cssText = `
      position: fixed;
      width: 600px;
      height: 600px;
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
      transform: translate(-50%, -50%);
      background: radial-gradient(circle, var(--spotlight-color) 0%, transparent 70%);
      transition: opacity 0.3s ease;
      opacity: 0;
    `;
    document.body.appendChild(el);

    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
      el.style.opacity = "1";
    };
    const hide = () => { el.style.opacity = "0"; };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
      document.body.removeChild(el);
    };
  }, []);

  return null;
}
