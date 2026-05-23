import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  thumbnail: string;
}

export const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "Showreel 2026",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 2,
      title: "Silky Smooth",
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 3,
      title: "DaVinci Color Grading",
      thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="portfolio" className="py-20 px-4 md:px-0">
      <div className="flex justify-between items-baseline mb-4">
        <h2 className="font-headline-lg text-2xl md:text-[32px] tracking-tighter text-on-surface opacity-80">
          <span className="text-primary-container">/</span> portfolio
        </h2>
      </div>
      <div className="h-[1px] w-full bg-white/10 mb-12" />

      {/* macOS-style Carousel Wrapper */}
      <div className="relative group">
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-surface-container shadow-2xl border border-white/10">
          {/* Active Carousel Slide */}
          <img
            src={currentProject.thumbnail}
            alt={currentProject.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Left/Right Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20 z-20"
            aria-label="Previous Project"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20 z-20"
            aria-label="Next Project"
          >
            <ChevronRight size={24} />
          </button>

          {/* Content Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex flex-col justify-end p-6 md:p-12 text-left">
            <h3 className="font-display-lg text-2xl md:text-4xl text-white tracking-tight">
              {currentProject.title}
            </h3>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-white/20"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
