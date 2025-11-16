"use client";

import { useEffect } from "react";

export default function SpotlightEffect() {
  useEffect(() => {
    const updateSpotlight = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    document.addEventListener('mousemove', updateSpotlight);

    return () => {
      document.removeEventListener('mousemove', updateSpotlight);
    };
  }, []);

  return null;
}
