import React from "react";
import { Aesthetics } from "./components/Aesthetics";
import { DockNavbar } from "./components/DockNavbar";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Links } from "./components/Links";

const App: React.FC = () => {
  return (
    <div className="bg-background text-on-surface font-body-md antialiased selection:bg-primary selection:text-on-primary min-h-screen overflow-x-hidden relative">
      {/* Global premium aesthetics: noise, canvas particles, ambient glows */}
      <Aesthetics />

      {/* Modern float-dock navigation */}
      <DockNavbar />

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-6 md:px-16 pt-24 md:pt-16 pb-20 space-y-12">
        {/* Home / Introduction section */}
        <Hero />

        {/* Video Portfolio showcase carousel */}
        <Portfolio />

        {/* Dynamic Social Links Grid */}
        <Links />
      </main>

      {/* Premium Glassmorphic Footer */}
      <footer className="w-full py-10 mt-16 text-center border-t border-white/5 bg-white/[0.01] backdrop-blur-md relative z-10">
        <p className="font-body-md text-xs md:text-sm text-on-surface-variant opacity-60 leading-relaxed">
          Built and designed by <span className="text-primary font-medium">Abdullah Mehdi</span>.
          <br />
          All rights reserved &copy; {new Date().getFullYear()}.
        </p>
      </footer>
    </div>
  );
};

export default App;
