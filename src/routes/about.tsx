import { createFileRoute, Link } from "@tanstack/react-router";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/about")({
  component: About,
});

const GRAIN_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)' opacity='0.08'/></svg>`,
  );

function About() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between"
      style={{
        background: "linear-gradient(135deg, #B8A4DE 0%, #F0BEDD 100%)",
        fontFamily: "Inter, sans-serif",
        color: "#2d1b4d",
      }}
    >
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 50,
          backgroundImage: `url("${GRAIN_SVG}")`,
          backgroundSize: "200px 200px",
          backgroundRepeat: "repeat",
          opacity: 0.12,
        }}
      />

      {/* Top Navigation */}
      <NavBar textColor="#ffffff" />

      {/* Content */}
      <div
        className="flex-1 flex flex-col justify-center items-center px-4 py-24 sm:py-32 relative"
        style={{ zIndex: 10 }}
      >
        <div className="max-w-2xl w-full text-center sm:text-left">
          {/* Subtitle Tagline Pill */}
          <div className="mb-6 flex justify-center sm:justify-start">
            <span
              className="text-[10px] sm:text-xs font-semibold uppercase px-3 py-1.5 rounded-full"
              style={{
                color: "#fff",
                backgroundColor: "#2d1b4d",
                letterSpacing: "0.22em",
              }}
            >
              ABOUT TOONHUB
            </span>
          </div>

          {/* Heading */}
          <div className="flex items-center mb-8 justify-center sm:justify-start" style={{ gap: "clamp(18px, 2.5vw, 22px)" }}>
            <h1
              className="text-5xl sm:text-7xl font-bold uppercase"
              style={{
                color: "#2d1b4d",
                opacity: 0.98,
                letterSpacing: "0.02em",
                fontFamily: "Anton, sans-serif",
                lineHeight: 1.1,
              }}
            >
              OUR STORY
            </h1>
            <img
              src="/monster-blue.png"
              alt="ToonHub monster mascot"
              draggable={false}
              className="select-none"
              style={{
                height: "clamp(72px, 9vw, 104px)",
                width: "auto",
                objectFit: "contain",
                flexShrink: 0,
              }}
            />
          </div>

          {/* Story Body */}
          <div className="space-y-5 sm:space-y-6" style={{ color: "rgba(45,27,77,0.75)", fontSize: "clamp(15px, 1.4vw, 16px)", lineHeight: 1.7 }}>
            <p>
              A personal project by Marwa Shahid, made for fun and practice. No chat, no interaction — just a few characters to see and quietly get to know.
            </p>
            <p>
              ToonHub started with a simple belief — that characters are more than static images. Each one is a small piece of personality, shaped and rendered with care, waiting for someone to notice the little details.
            </p>
            <p>
              This is a growing collection of 3D character designs — different shapes, colors, and expressions, each with its own quiet charm. It's not a story or a universe just yet, just a space to explore and appreciate character design for what it is.
            </p>
            <p>
              Feel free to look around, meet the characters, and see which ones catch your eye. Welcome to ToonHub.
            </p>
          </div>

          {/* Divider accent */}
          <div
            className="mt-10 mb-6 w-12 h-0.5 mx-auto sm:mx-0"
            style={{
              background: "linear-gradient(90deg, rgba(255,255,255,0.3), transparent)",
              borderRadius: "2px",
            }}
          />

          {/* Back button and spacer */}
          <div className="flex justify-center sm:justify-start">
            <Link
              to="/"
              className="px-6 py-3 rounded-full flex items-center gap-2 group transition-all"
style={{
                border: "2px solid #1a1a2e",
color: "#fff",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.backgroundColor = "rgba(26,26,46,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              ← Back to Characters
            </Link>
          </div>
        </div>
      </div>

      {/* Small footer copyright */}
      <Footer />
    </section>
  );
}