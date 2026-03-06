"use client";

import { AdaptiveNavbar } from "@/components/ui/AdaptiveNavbar";

export default function Navigation() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center py-6 pointer-events-none">
      <div className="pointer-events-auto">
        <AdaptiveNavbar />
      </div>
    </div>
  );
}
