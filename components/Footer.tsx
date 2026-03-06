"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} Avi Mathur. Built with Next.js
        </p>
        <div className="flex items-center gap-1 text-sm text-zinc-600">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-pulse" />
          
        </div>
      </div>
    </footer>
  );
}
