import { Link } from "@tanstack/react-router";
import { useState } from "react";

interface NavBarProps {
  textColor?: string;
}

export default function NavBar({ textColor = "#fff" }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="absolute top-0 inset-x-0 flex items-center justify-between px-4 sm:px-10 py-5"
      style={{ zIndex: 60 }}
    >
      {/* Logo */}
      <Link
        to="/"
        className="group flex items-center gap-2 hover:opacity-80 transition-opacity"
        style={{ color: textColor, textDecoration: "none" }}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 transition-transform duration-300 group-hover:scale-105"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4 5.5H8V10h2.5v6.5h3V10H16V7.5z"
          />
        </svg>
        <span
          className="text-xs font-semibold uppercase tracking-[0.22em] select-none"
          style={{ opacity: 0.95 }}
        >
          TOONHUB
        </span>
      </Link>

      {/* Desktop nav links */}
      <nav
        className="hidden sm:flex items-center gap-8 text-xs font-semibold uppercase"
        style={{ color: textColor, opacity: 0.9, letterSpacing: "0.18em" }}
      >
        <Link
          to="/"
          className="hover:opacity-70 transition-opacity"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Characters
        </Link>
        <Link
          to="/world"
          className="hover:opacity-70 transition-opacity"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          World
        </Link>
        <Link
          to="/about"
          className="hover:opacity-70 transition-opacity"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          About
        </Link>
      </nav>

      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((o) => !o)}
        className="flex sm:hidden items-center justify-center w-8 h-8"
        style={{ color: textColor }}
      >
        {menuOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu panel */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 sm:hidden"
            style={{ zIndex: 70 }}
            onClick={() => setMenuOpen(false)}
          />
          <nav
            className="absolute top-full left-4 right-4 sm:hidden flex flex-col gap-1 px-4 py-4 rounded-2xl backdrop-blur-xl border"
            style={{
              zIndex: 80,
              backgroundColor: "rgba(0,0,0,0.45)",
              borderColor: "rgba(255,255,255,0.15)",
            }}
          >
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-xs font-semibold uppercase hover:bg-white/10 transition-colors"
              style={{ color: textColor, letterSpacing: "0.18em", textDecoration: "none" }}
            >
              Characters
            </Link>
            <Link
              to="/world"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-xs font-semibold uppercase hover:bg-white/10 transition-colors"
              style={{ color: textColor, letterSpacing: "0.18em", textDecoration: "none" }}
            >
              World
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-xs font-semibold uppercase hover:bg-white/10 transition-colors"
              style={{ color: textColor, letterSpacing: "0.18em", textDecoration: "none" }}
            >
              About
            </Link>
          </nav>
        </>
      )}
    </header>
  );
}
