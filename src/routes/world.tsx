import { createFileRoute } from "@tanstack/react-router";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const TOP_COLOR = "#B8A4DE";
const FLOOR_COLOR = "#F0BEDD";

const STORY_BLOCKS = [
  {
    number: "01",
    heading: "every toon starts as a spark",
    story:
      "long before they had names, they were just feelings — a stubborn hope, a laugh too loud for one body, a quiet worry that kept circling back. somewhere between a daydream and a decision, each one found a shape that fit just right. and once they did, they never looked back.",
    align: "left" as const,
    imageSrc: "/card-1.png",
    frameBg: "rgba(56, 189, 248, 0.12)",
    frameBorder: "rgba(56, 189, 248, 0.28)",
  },
  {
    number: "02",
    heading: "they found each other first",
    story:
      "nobody drew up a guest list. nobody planned the introductions. one clumsy hello tumbled into a hundred inside jokes, and somewhere between the shared snacks and the 2am conversations, strangers quietly became the kind of family you actually choose.",
    align: "right" as const,
    imageSrc: "/card-2.png",
    frameBg: "rgba(251, 146, 60, 0.12)",
    frameBorder: "rgba(251, 146, 60, 0.28)",
  },
  {
    number: "03",
    heading: "now, this world is home",
    story:
      "messy floors, loud opinions, and zero apologies — this world wears chaos like a badge. but if you look closer, you'll see something rarer than order: a place where every toon belongs, horns and all, exactly as they are.",
    align: "left" as const,
    imageSrc: "/card-3.png",
    frameBg: "rgba(45, 212, 191, 0.12)",
    frameBorder: "rgba(45, 212, 191, 0.28)",
  },
];

function StoryImage({
  src,
  alt,
  bg,
  border,
}: {
  src: string;
  alt: string;
  bg: string;
  border: string;
}) {
  return (
    <div
      className="shrink-0 overflow-hidden hover:scale-[1.03] transition-transform duration-300 flex items-center justify-center"
      style={{
        width: "clamp(200px, 85vw, 400px)",
        height: "auto",
        aspectRatio: "280 / 340",
        borderRadius: "20px",
        backgroundColor: bg,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: `1px solid ${border}`,
        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        padding: "16px",
      }}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="w-full h-full object-contain select-none scale-[1.15]"
      />
    </div>
  );
}

export const Route = createFileRoute("/world")({
  component: WorldPage,
});

function WorldPage() {
  return (
    <main
      className="relative w-full min-h-screen flex flex-col select-none"
      style={{
        background: `linear-gradient(135deg, ${TOP_COLOR} 0%, ${FLOOR_COLOR} 100%)`,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <NavBar textColor="#FFFFFF" />

      <div
        className="w-full flex justify-center relative z-10"
        style={{ paddingTop: "68px" }}
      >
        <img
          src="/monster-crew.png"
          alt="The Monster Crew"
          draggable={false}
          className="select-none"
          style={{
            width: "clamp(200px, 85vw, 620px)",
            maxWidth: "90vw",
            objectFit: "contain",
            objectPosition: "bottom center",
            display: "block",
            height: "auto",
          }}
        />
      </div>

      <div className="relative z-10 px-5 md:px-16 lg:px-28 pt-14 md:pt-16">
        <div className="flex items-center gap-3">
          <div
            style={{
              width: "22px",
              height: "1.5px",
              backgroundColor: "rgba(255,255,255,0.45)",
              flexShrink: 0,
            }}
          />
          <span
            className="uppercase"
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "10px",
              letterSpacing: "0.28em",
            }}
          >
            the monster crew
          </span>
        </div>
      </div>

      <div className="relative z-10 px-5 md:px-16 lg:px-28 pb-32">
        {STORY_BLOCKS.map((block, i) => {
          const isLeft = block.align === "left";
          return (
            <div
              key={i}
              className={`flex flex-col ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-16`}
              style={{
                paddingTop: i === 0 ? "clamp(32px, 5vw, 64px)" : "clamp(48px, 8vw, 112px)",
              }}
            >
              {/* Text block — first in DOM for mobile, reordered on desktop via flex-row */}
              <div
                className={`flex flex-col items-center text-center ${
                  isLeft ? "md:items-start md:text-left" : "md:items-end md:text-right"
                } flex-1 w-full`}
                style={{ maxWidth: "520px" }}
              >
                <div
                  className="font-black leading-none select-none pointer-events-none"
                  style={{
                    fontSize: "clamp(56px, 12vw, 120px)",
                    color: "#4a4a4a",
                    opacity: 0.18,
                    lineHeight: 1,
                    marginBottom: "-0.18em",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {block.number}
                </div>

                <h2
                  className="font-bold leading-tight tracking-tight"
                  style={{
                    fontSize: "clamp(28px, 3.2vw, 40px)",
                    color: "#FFFFFF",
                    marginBottom: "1.25rem",
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {block.heading}
                </h2>

                <p
                  className="font-light"
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    fontSize: "clamp(15px, 1.4vw, 17px)",
                    lineHeight: 1.6,
                    maxWidth: "460px",
                  }}
                >
                  {block.story}
                </p>
              </div>

              {/* Image — second in DOM for mobile */}
              <div className="w-full flex justify-center md:w-auto">
                <StoryImage
                  src={block.imageSrc}
                  alt={block.heading}
                  bg={block.frameBg}
                  border={block.frameBorder}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Closing section ── */}
      <div
        className="relative z-10 w-full flex flex-col items-center justify-center px-5 md:px-16 lg:px-28 text-center select-none"
        style={{
          paddingTop: "clamp(48px, 8vw, 100px)",
          paddingBottom: "clamp(48px, 8vw, 100px)",
        }}
      >
        <div style={{ maxWidth: "650px" }}>
          <h2
            className="font-bold leading-tight tracking-wide"
            style={{
              fontSize: "clamp(24px, 4vw, 42px)",
              color: "#FFFFFF",
              lineHeight: 1.5,
              letterSpacing: "0.02em",
            }}
          >
            Thank you for being here from the very beginning
          </h2>
          <p
            className="font-light"
            style={{
              fontSize: "clamp(15px, 1.8vw, 19px)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.6,
              marginTop: "1.25rem",
            }}
          >
            Every story starts somewhere. We're glad you're part of this one.
          </p>
        </div>
      </div>

      {/* ── Gradient divider ── */}
      <div
        className="relative z-10 w-full"
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
        }}
      />

      <Footer />
    </main>
  );
}
