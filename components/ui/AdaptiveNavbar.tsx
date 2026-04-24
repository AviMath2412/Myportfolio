"use client";

import { useTheme } from "next-themes";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const AdaptiveNavbar = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav className="rounded-full border-[0.5px] border-zinc-200/80 bg-white/80 px-5 py-2 shadow-sm backdrop-blur dark:border-white/10 dark:bg-zinc-950/80 dark:shadow-none">
      <div className="flex items-center gap-1 md:gap-2">
        {LINKS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-3 py-1.5 text-xs font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white md:text-sm"
          >
            {item.label}
          </a>
        ))}
        <button
          type="button"
          onClick={() =>
            setTheme(resolvedTheme === "dark" ? "light" : "dark")
          }
          className="ml-1 rounded-full border-[0.5px] border-zinc-200 bg-white p-2 text-zinc-600 transition hover:text-zinc-900 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          aria-label="Toggle dark mode"
          title="Toggle dark mode"
        >
          <svg
            className="h-3.5 w-3.5 dark:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M20.354 15.354A9 9 0 118.646 3.646 7 7 0 0020.354 15.354z"
            />
          </svg>
          <svg
            className="hidden h-3.5 w-3.5 dark:block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0L16.95 7.05M7.05 16.95l-1.414 1.414M12 16a4 4 0 100-8 4 4 0 000 8z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};
