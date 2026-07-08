import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

type Character = {
  src: string;
  bg: string;
  panel: string;
  name: string;
  tagline: string;
  personality: string[];
  bio: string;
};

const CHARACTERS: Character[] = [
  {
    src: "https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png",
    bg: "#F4845F",
    panel: "#F79B7F",
    name: "EMBER",
    tagline: "The Spark Starter",
    personality: ["Bold", "Fearless", "Warm"],
    bio: "Ember lights up every room she enters. A restless dreamer who turns wild ideas into unstoppable action — the friend that convinces you to jump first and plan later.",
  },
  {
    src: "https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png",
    bg: "#6BBF7A",
    panel: "#85CC92",
    name: "MOSS",
    tagline: "The Quiet Genius",
    personality: ["Thoughtful", "Curious", "Grounded"],
    bio: "Moss listens more than he speaks and notices everything. A patient tinkerer who finds beauty in slow, careful making — the calm center when everyone else spirals.",
  },
  {
    src: "https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png",
    bg: "#E882B4",
    panel: "#ED9DC4",
    name: "BLOOM",
    tagline: "The Soft Rebel",
    personality: ["Playful", "Kind", "Unfiltered"],
    bio: "Bloom laughs loud, dresses louder, and believes softness is a superpower. She'll hand you a compliment and a paintbrush in the same breath.",
  },
  {
    src: "https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png",
    bg: "#6EB5FF",
    panel: "#8DC4FF",
    name: "AZURE",
    tagline: "The Dream Drifter",
    personality: ["Chill", "Poetic", "Loyal"],
    bio: "Azure moves at the speed of clouds. A late-night thinker who collects songs, sunsets and small stories — the one who always texts back at 2AM.",
  },
];

const EASE = "cubic-bezier(0.4,0,0.2,1)";
const DURATION = 650;

const GRAIN_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)' opacity='0.08'/></svg>`,
  );

export default function ToonhubHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const animatingRef = useRef(false);

  useEffect(() => {
    CHARACTERS.forEach((i) => {
      const img = new window.Image();
      img.src = i.src;
    });
  }, []);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const navigate = (dir: "next" | "prev") => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setShowBio(false);
    setActiveIndex((p) => (dir === "next" ? (p + 1) % 4 : (p + 3) % 4));
    window.setTimeout(() => {
      animatingRef.current = false;
    }, DURATION);
  };

  const jumpTo = (i: number) => {
    if (animatingRef.current || i === activeIndex) return;
    animatingRef.current = true;
    setShowBio(false);
    setActiveIndex(i);
    window.setTimeout(() => {
      animatingRef.current = false;
    }, DURATION);
  };

  const active = CHARACTERS[activeIndex];
  const center = activeIndex;
  const left = (activeIndex + 3) % 4;
  const right = (activeIndex + 1) % 4;

  const itemStyle = (i: number): CSSProperties => {
    const base: CSSProperties = {
      position: "absolute",
      aspectRatio: "0.6 / 1",
      transition: `transform ${DURATION}ms ${EASE}, filter ${DURATION}ms ${EASE}, opacity ${DURATION}ms ${EASE}, left ${DURATION}ms ${EASE}, bottom ${DURATION}ms ${EASE}, height ${DURATION}ms ${EASE}`,
      willChange: "transform, filter, opacity",
      cursor: "pointer",
    };
    if (i === center) {
      return {
        ...base,
        left: "50%",
        bottom: isMobile ? "22%" : 0,
        height: isMobile ? "60%" : "92%",
        transform: `translateX(-50%) scale(${isMobile ? 1.25 : 1.68})`,
        filter: "blur(0px)",
        opacity: 1,
        zIndex: 20,
      };
    }
    if (i === left) {
      return {
        ...base,
        left: isMobile ? "20%" : "30%",
        bottom: isMobile ? "32%" : "12%",
        height: isMobile ? "16%" : "28%",
        transform: "translateX(-50%) scale(1)",
        filter: "blur(2px)",
        opacity: 0.85,
        zIndex: 10,
      };
    }
    if (i === right) {
      return {
        ...base,
        left: isMobile ? "80%" : "70%",
        bottom: isMobile ? "32%" : "12%",
        height: isMobile ? "16%" : "28%",
        transform: "translateX(-50%) scale(1)",
        filter: "blur(2px)",
        opacity: 0.85,
        zIndex: 10,
      };
    }
    return {
      ...base,
      left: "50%",
      bottom: isMobile ? "32%" : "12%",
      height: isMobile ? "13%" : "22%",
      transform: "translateX(-50%) scale(1)",
      filter: "blur(4px)",
      opacity: 1,
      zIndex: 5,
    };
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: active.bg,
        transition: `background-color ${DURATION}ms ${EASE}`,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="relative w-full" style={{ height: "100vh", overflow: "hidden" }}>
        {/* Grain */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 50,
            backgroundImage: `url("${GRAIN_SVG}")`,
            backgroundSize: "200px 200px",
            backgroundRepeat: "repeat",
            opacity: 0.4,
          }}
        />

        {/* Top nav */}
        <header
          className="absolute top-0 inset-x-0 flex items-center justify-between px-4 sm:px-10 py-5"
          style={{ zIndex: 60 }}
        >
          <div
            className="text-xs font-semibold uppercase flex items-center gap-2"
            style={{ color: "#fff", opacity: 0.95, letterSpacing: "0.22em" }}
          >
            <Sparkles size={14} strokeWidth={2.5} />
            TOONHUB
          </div>
          <nav
            className="hidden sm:flex items-center gap-8 text-xs font-semibold uppercase"
            style={{ color: "#fff", opacity: 0.9, letterSpacing: "0.18em" }}
          >
            <a href="#" className="hover:opacity-70 transition-opacity">Shop</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Drops</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Story</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Contact</a>
          </nav>
          <div
            className="text-xs font-semibold uppercase"
            style={{ color: "#fff", opacity: 0.9, letterSpacing: "0.18em" }}
          >
            Bag (0)
          </div>
        </header>


        {/* Tagline pill under the giant name */}
        <div
          className="absolute inset-x-0 flex justify-center pointer-events-none"
          style={{ zIndex: 4, top: isMobile ? "12%" : "10%" }}
        >
          <span
            key={active.tagline}
            className="text-[10px] sm:text-xs font-semibold uppercase px-3 py-1.5 rounded-full"
            style={{
              color: active.bg,
              backgroundColor: "#fff",
              letterSpacing: "0.22em",
              animation: "toonhub-fade 650ms ease-out",
            }}
          >
            {active.tagline}
          </span>
        </div>

        {/* Carousel */}
        <div className="absolute inset-0" style={{ zIndex: 3 }}>
          {CHARACTERS.map((img, i) => (
            <div key={i} style={itemStyle(i)} onClick={() => (i === center ? setShowBio((s) => !s) : jumpTo(i))}>
              <img
                src={img.src}
                alt={img.name}
                draggable={false}
                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "bottom center" }}
              />
            </div>
          ))}
        </div>

        {/* Bio panel — appears on click of center / giant name */}
        {showBio && (
          <div
            className="absolute left-1/2 -translate-x-1/2 px-6 py-4 rounded-2xl backdrop-blur-md text-center"
            style={{
              zIndex: 55,
              bottom: isMobile ? "50%" : "38%",
              maxWidth: "min(520px, 92vw)",
              backgroundColor: "rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#fff",
              animation: "toonhub-fade 350ms ease-out",
            }}
          >
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              {active.personality.map((p) => (
                <span
                  key={p}
                  className="text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.18)", letterSpacing: "0.18em" }}
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="text-sm sm:text-base" style={{ lineHeight: 1.5, opacity: 0.95 }}>
              {active.bio}
            </p>
          </div>
        )}

        {/* Bottom-left: name + personality chips + arrows */}
        <div
          className="absolute bottom-6 left-4 sm:bottom-16 sm:left-16"
          style={{ zIndex: 60, maxWidth: 340 }}
        >
          <div
            className="text-[10px] font-semibold uppercase mb-2"
            style={{ color: "#fff", opacity: 0.7, letterSpacing: "0.24em" }}
          >
            Figurine 0{activeIndex + 1} / 04
          </div>
          <h1
            key={active.name + "-h"}
            className="mb-3 text-2xl sm:text-4xl font-bold uppercase"
            style={{
              color: "#fff",
              opacity: 0.98,
              letterSpacing: "0.02em",
              fontFamily: "Anton, sans-serif",
              lineHeight: 1,
              animation: "toonhub-fade 500ms ease-out",
            }}
          >
            {active.name}
            <span className="block text-xs sm:text-sm font-semibold mt-1 tracking-widest" style={{ fontFamily: "Inter, sans-serif", opacity: 0.85 }}>
              {active.tagline}
            </span>
          </h1>
          <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-5">
            {active.personality.map((p) => (
              <span
                key={p}
                className="text-[10px] font-semibold uppercase px-2 py-1 rounded-full"
                style={{
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.5)",
                  letterSpacing: "0.16em",
                }}
              >
                {p}
              </span>
            ))}
          </div>
          <p
            className="hidden sm:block text-xs sm:text-sm mb-5"
            style={{ color: "#fff", opacity: 0.85, lineHeight: 1.55 }}
          >
            {active.bio}
          </p>
          <div className="flex gap-3 items-center">
            <NavBtn onClick={() => navigate("prev")} label="Previous">
              <ArrowLeft size={22} strokeWidth={2.25} color="#fff" />
            </NavBtn>
            <NavBtn onClick={() => navigate("next")} label="Next">
              <ArrowRight size={22} strokeWidth={2.25} color="#fff" />
            </NavBtn>
            <div className="flex gap-1.5 ml-2">
              {CHARACTERS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to ${CHARACTERS[i].name}`}
                  onClick={() => jumpTo(i)}
                  className="rounded-full"
                  style={{
                    width: i === activeIndex ? 24 : 8,
                    height: 8,
                    backgroundColor: i === activeIndex ? "#fff" : "rgba(255,255,255,0.5)",
                    transition: "width 300ms, background-color 300ms",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom-right: Discover it */}
        <div className="absolute bottom-6 right-4 sm:bottom-16 sm:right-10" style={{ zIndex: 60 }}>
          <a
            href="#"
            className="flex items-center"
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(20px, 4vw, 56px)",
              fontWeight: 400,
              color: "#fff",
              opacity: 0.95,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "opacity 200ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.95")}
          >
            SHOP {active.name}
            <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8 ml-2" strokeWidth={2.25} color="#fff" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes toonhub-pop {
          0% { transform: scale(0.9); opacity: 0; filter: blur(6px); }
          100% { transform: scale(1); opacity: 1; filter: blur(0); }
        }
        @keyframes toonhub-fade {
          0% { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

function NavBtn({
  children,
  onClick,
  label,
}: {
  children: ReactNode;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center"
      style={{
        background: "transparent",
        border: "2px solid #fff",
        transition: "transform 150ms, background-color 150ms",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.08)";
        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      {children}
    </button>
  );
}
