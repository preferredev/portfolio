import React, { useEffect, useState } from "react";
import { Home, LayoutGrid, Share2 } from "lucide-react";

export const DockNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  // Monitor scroll to set active section link highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "portfolio", "links"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: <Home size={22} />, href: "#home" },
    { id: "portfolio", label: "Portfolio", icon: <LayoutGrid size={22} />, href: "#portfolio" },
    { id: "links", label: "Socials", icon: <Share2 size={22} />, href: "#links" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 z-50 flex w-[calc(100%-1.5rem)] max-w-[18rem] -translate-x-1/2 justify-center rounded-full border border-white/10 bg-white/5 px-1.5 py-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-[32px] sm:top-6 sm:max-w-fit sm:px-2 sm:py-2 md:top-8 dock-nav">
      <div className="flex w-full items-center justify-between gap-1.5 sm:w-auto sm:gap-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`dock-item relative flex h-11 items-center justify-center rounded-full transition-all group sm:h-12 ${
                isActive
                  ? "w-14 bg-white/10 text-primary shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_0_15px_rgba(128,131,255,0.15)] sm:w-16"
                  : "w-12 text-white/50 hover:bg-white/5 hover:text-white sm:w-14"
              }`}
              title={item.label}
            >
              {item.icon}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded border border-white/10 bg-surface-container px-2 py-1 text-[10px] font-label-sm uppercase tracking-wider text-on-surface opacity-0 transition-opacity pointer-events-none group-hover:opacity-100">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
