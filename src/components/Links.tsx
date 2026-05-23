import React from "react";
import { Mail } from "lucide-react";

export const Links: React.FC = () => {
  const socialLinks = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@mehdi.creative",
      icon: (
        <svg fill="currentColor" height="28" width="28" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/preferred.dev/",
      icon: (
        <svg fill="currentColor" height="28" width="28" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.20 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"></path>
        </svg>
      ),
    },
    {
      name: "Twitter / X",
      url: "#",
      icon: (
        <svg fill="currentColor" height="26" width="26" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/preferredev",
      icon: (
        <svg fill="currentColor" height="28" width="28" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:itscroop.cc@gmail.com",
      icon: <Mail size={28} />,
    },
  ];

  return (
    <section id="links" className="py-16 px-4 md:px-0 space-y-8">
      <div>
        <h2 className="font-headline-lg text-2xl md:text-[32px] tracking-tighter text-on-surface opacity-80">
          <span className="text-primary-container">/</span> links
        </h2>
        <div className="h-[1px] w-full bg-white/10 mt-4" />
      </div>

      <div className="flex flex-wrap justify-start gap-4 pt-4 sm:gap-6">
        {socialLinks.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target={social.url.startsWith("http") ? "_blank" : undefined}
            rel={social.url.startsWith("http") ? "noreferrer" : undefined}
            className="relative flex h-14 w-14 items-center justify-center rounded-2xl glass-panel text-on-surface/75 transition-all duration-300 hover:-translate-y-1.5 hover:text-primary hover:shadow-[0_0_30px_rgba(128,131,255,0.25)] sm:h-16 sm:w-16 md:h-20 md:w-20 group"
            aria-label={social.name}
          >
            {social.icon}
            {/* Minimal Platform Tooltip */}
            <span className="absolute -bottom-8 bg-surface-container border border-white/5 px-2 py-0.5 rounded text-[9px] font-label-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-white/60">
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};
