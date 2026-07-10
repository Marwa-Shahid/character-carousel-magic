export default function Footer() {
  return (
    <footer
      className="relative z-10 w-full flex flex-col items-center gap-8 sm:gap-0 sm:flex-row sm:justify-between px-6 md:px-12 select-none"
      style={{
        backgroundColor: "#121212",
        color: "#FFFFFF",
        fontFamily: "Inter, sans-serif",
        paddingTop: "clamp(40px, 4vw, 48px)",
        paddingBottom: "clamp(40px, 4vw, 48px)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 opacity-90"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4 5.5H8V10h2.5v6.5h3V10H16V7.5z"
          />
        </svg>
        <span className="text-xs font-semibold uppercase tracking-[0.22em] opacity-90">
          TOONHUB
        </span>
      </div>

      {/* Copyright */}
      <div
        className="text-xs font-normal text-center sm:text-left leading-relaxed select-none order-last sm:order-none"
        style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em" }}
      >
        <span>© 2026 ToonHub. All rights reserved.</span>
        <span className="mx-1.5 opacity-50">·</span>
        <span>Designed &amp; built by Marwa Shahid</span>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-5">
        <a
          href="#"
          aria-label="Instagram"
          className="transition-all duration-200 text-inherit"
          style={{ color: "rgba(255,255,255,0.7)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.color = "#B8A4DE";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.color = "rgba(255,255,255,0.7)";
          }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
        <a
          href="#"
          aria-label="TikTok"
          className="transition-all duration-200 text-inherit"
          style={{ color: "rgba(255,255,255,0.7)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.color = "#B8A4DE";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.color = "rgba(255,255,255,0.7)";
          }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
          </svg>
        </a>
        <a
          href="#"
          aria-label="YouTube"
          className="transition-all duration-200 text-inherit"
          style={{ color: "rgba(255,255,255,0.7)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.color = "#B8A4DE";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.color = "rgba(255,255,255,0.7)";
          }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
            <polygon points="10 15 15 12 10 9" />
          </svg>
        </a>
        <a
          href="#"
          aria-label="X"
          className="transition-all duration-200 text-inherit"
          style={{ color: "rgba(255,255,255,0.7)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.color = "#B8A4DE";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.color = "rgba(255,255,255,0.7)";
          }}
        >
          <svg
            className="w-3.5 h-3.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
