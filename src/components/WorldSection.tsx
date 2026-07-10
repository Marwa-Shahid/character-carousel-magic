import { useState, useEffect } from "react";

export interface WorldSectionProps {
  topColor: string;
  floorColor: string;
  label: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  imageSrc: string;
  fallbackImageSrc?: string;
  darkTextColor?: string;
  mutedTextColor?: string;
}

export default function WorldSection({
  topColor,
  floorColor,
  label,
  headline,
  description,
  ctaText,
  ctaHref = "#",
  imageSrc,
  fallbackImageSrc,
  darkTextColor = "#1a1a1a",
  mutedTextColor = "#4a4a4a",
}: WorldSectionProps) {
  const [currentImage, setCurrentImage] = useState(imageSrc);

  useEffect(() => {
    setCurrentImage(imageSrc);
  }, [imageSrc]);

  return (
    <section 
      className="relative w-full flex flex-col overflow-hidden select-none transition-[background] duration-500"
      style={{ 
        fontFamily: "Inter, sans-serif",
        minHeight: "160vh",
        background: `linear-gradient(135deg, ${topColor} 0%, ${floorColor} 100%)`
      }}
    >
      {/* Content Overlay — flex-1 so it fills the full section height */}
      <div className="relative z-10 flex-1 flex flex-col w-full px-6 pt-20 pb-16 md:px-20 md:pt-28 md:pb-20">

        {/* Top Zone: Label (Top Left) & Description + CTA (Top Right) */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-6">
          {/* Label: top-left corner */}
          <div className="text-left">
            <span 
              className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-300"
              style={{ color: "#FFFFFF" }}
            >
              {label}
            </span>
          </div>

          {/* Description + CTA: top-right corner (small, light weight) */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right max-w-xs md:max-w-md gap-3 md:gap-4">
            <p 
              className="text-xs md:text-sm font-light leading-relaxed transition-colors duration-300"
              style={{ color: "#FFFFFF" }}
            >
              {description}
            </p>
            <a
              href={ctaHref}
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: "#FFFFFF" }}
            >
              {ctaText}
              <span className="text-[13px] md:text-[15px] leading-none">→</span>
            </a>
          </div>
        </div>

        {/* Spacer — pushes headline down below the absolutely-positioned image */}
        <div className="flex-1" />

        {/* Headline — anchored bottom-left, always below the image */}
        <div className="text-left max-w-full md:max-w-4xl">
          <h2 
            className="text-[38px] sm:text-[52px] md:text-[68px] lg:text-[84px] font-black uppercase leading-[0.95] tracking-tighter transition-colors duration-300"
            style={{ color: "#FFFFFF" }}
          >
            {headline}
          </h2>
        </div>
      </div>

      {/* Floor shadow — sits at the base of the image */}
      <div 
        className="absolute left-1/2 w-[90%] md:w-[85%] max-w-[1200px] h-[40px] pointer-events-none z-10"
        style={{ 
          bottom: "30%",
          transform: "translate(-50%, 50%)",
          background: "radial-gradient(ellipse 60% 100%, rgba(0,0,0,0.2), transparent 70%)"
        }}
      />

      {/* Character Group Image — upper-center of the section */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 w-[75%] sm:w-[65%] md:w-[60%] lg:w-[55%] h-[38%] sm:h-[42%] md:h-[46%] pointer-events-none flex items-end justify-center z-20"
        style={{ bottom: "30%" }}
      >
        <img
          src={currentImage}
          alt={headline}
          draggable={false}
          onError={() => {
            if (fallbackImageSrc && currentImage !== fallbackImageSrc) {
              setCurrentImage(fallbackImageSrc);
            }
          }}
          className="w-full h-full object-contain object-bottom pointer-events-none select-none transition-transform duration-300 hover:scale-[1.03]"
        />
      </div>
    </section>
  );
}

