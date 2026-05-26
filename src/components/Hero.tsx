import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  const specialties = [
    "post production",
    "video editing",
    "color grading",
    "professional production",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % specialties.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center justify-center py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        {/* Right side in HTML is image, we render it first on mobile, but keep exact grid order */}
        <div className="flex justify-center items-center h-[350px] md:h-[550px] relative order-1 md:order-1">
          {/* Backing Ambient Blue Glow specifically behind the 3D graphic */}
          <div className="absolute w-[65%] h-[65%] bg-primary-container/10 blur-[90px] rounded-full pointer-events-none" />
          
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVieZUoBfMIwOhkyCNe9YhlYiF1VuYOm_hDEBxQoWKLRZbhPGsZmB8ZZ-jTMNcE_RSrk3yWf_2_JcFIHzBBMvM7TZuKb92uc0F64JGPbju_1goK2C_877qmLuhZI0Ta4Utb6lKL70wOOmJV5Gvq4ovYu0nSDdO8_sEdG3ZM8JGbCY30uzWKYhvSlZnRQWV5kBWeibq0IpRgjsy5-pfHrAKvqkdQOfEWMNU4FObURwQ7HpvTueLn9mQswrsH5n7cXmedIzrhLkyi3gz"
            alt="Abdullah Mehdi 3D Visual Object"
            className="relative z-10 max-h-full object-contain scale-[1.25] animate-float-3d"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-8 text-left order-2 md:order-2 px-4 md:px-0">
          <div className="space-y-6">
            <h1 className="font-display-lg text-[44px] md:text-[68px] text-on-surface tracking-tighter leading-none">
              hi,{" "}
              <span className="text-primary">
                mehdi
              </span>{" "}
              here.
            </h1>

            {/* Premium Specialty Text Fader */}
            <div className="h-10 relative overflow-hidden font-label-sm text-sm tracking-widest text-primary uppercase">
              {specialties.map((specialty, idx) => {
                const isActive = idx === currentIndex;
                const isExit =
                  idx === (currentIndex - 1 + specialties.length) % specialties.length;

                return (
                  <span
                    key={specialty}
                    className={`absolute left-0 top-0 w-full transition-all duration-700 ease-in-out ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : isExit
                        ? "opacity-0 -translate-y-6"
                        : "opacity-0 translate-y-6"
                    }`}
                  >
                    {specialty}
                  </span>
                );
              })}
            </div>

            <p className="font-body-md text-on-surface-variant max-w-lg leading-relaxed">
              Establishing a new era for post-production agencies through precise editing, color, and finishing.
            </p>

            <div className="pt-4">
              <a
                href="mailto:mehdi.outliers@outlook.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary-container/10 hover:bg-primary-container/20 border border-primary-container/25 rounded-full text-primary font-body-md font-medium transition-all shadow-[0_0_15px_rgba(128,131,255,0.15)] hover:shadow-[0_0_25px_rgba(128,131,255,0.35)] group"
              >
                Reach Out
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
