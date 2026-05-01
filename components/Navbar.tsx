"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import { Menu, MoonStar, SunMedium, X } from "lucide-react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/projects", label: "Projects" },
  { href: "/journey", label: "My Journey" }
];

type HighlightFrame = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export function Navbar() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandCollapsed, setBrandCollapsed] = useState(false);
  const [desktopHighlight, setDesktopHighlight] = useState<HighlightFrame | null>(null);
  const [mobileHighlight, setMobileHighlight] = useState<HighlightFrame | null>(null);
  const desktopNavRef = useRef<HTMLElement | null>(null);
  const mobileNavRef = useRef<HTMLElement | null>(null);
  const desktopItemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const mobileItemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    let ticking = false;

    function updateBrandState() {
      const nextCollapsed = window.scrollY > 28;

      setBrandCollapsed((current) =>
        current === nextCollapsed ? current : nextCollapsed
      );
      ticking = false;
    }

    function handleScroll() {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateBrandState);
    }

    updateBrandState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function isActive(href: string) {
    if (href === "/") {
      return pathname === href;
    }

    return pathname.startsWith(href);
  }

  function toggleTheme() {
    const currentTheme =
      document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  }

  const activeHref = navItems.find((item) => isActive(item.href))?.href ?? "/";

  const setDesktopItemRef = useCallback(
    (href: string) => (node: HTMLAnchorElement | null) => {
      desktopItemRefs.current[href] = node;
    },
    []
  );

  const setMobileItemRef = useCallback(
    (href: string) => (node: HTMLAnchorElement | null) => {
      mobileItemRefs.current[href] = node;
    },
    []
  );

  const measureHighlight = useCallback(
    (
      navElement: HTMLElement | null,
      itemRefs: Record<string, HTMLAnchorElement | null>
    ) => {
      const activeItem = itemRefs[activeHref];

      if (!navElement || !activeItem) {
        return null;
      }

      return {
        x: activeItem.offsetLeft,
        y: activeItem.offsetTop,
        width: activeItem.offsetWidth,
        height: activeItem.offsetHeight
      };
    },
    [activeHref]
  );

  useLayoutEffect(() => {
    function updateHighlights() {
      setDesktopHighlight(
        measureHighlight(desktopNavRef.current, desktopItemRefs.current)
      );
      setMobileHighlight(
        menuOpen
          ? measureHighlight(mobileNavRef.current, mobileItemRefs.current)
          : null
      );
    }

    const frameId = window.requestAnimationFrame(updateHighlights);
    const resizeObserver = new ResizeObserver(updateHighlights);

    if (desktopNavRef.current) {
      resizeObserver.observe(desktopNavRef.current);
    }

    if (menuOpen && mobileNavRef.current) {
      resizeObserver.observe(mobileNavRef.current);
    }

    window.addEventListener("resize", updateHighlights);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHighlights);
    };
  }, [activeHref, measureHighlight, menuOpen]);

  const highlightTransition: Transition = reducedMotion
    ? { duration: 0 }
    : {
        type: "spring",
        stiffness: 420,
        damping: 34,
        mass: 0.8
      };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container pt-4">
        <div className="surface-card flex items-center justify-between gap-4 rounded-[2.25rem] px-5 py-3.5 md:px-6">
          <Link href="/" className="flex items-center">
            <span
              aria-label="Saransh Kumar"
              className="inline-flex h-7 items-center gap-[0.22rem] overflow-hidden whitespace-nowrap transition-[width,gap] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ width: brandCollapsed ? "2.35rem" : "10.9rem" }}
            >
              <span className="inline-flex items-center overflow-hidden">
                <span className="font-display text-lg leading-7 text-text">S</span>
                <span
                  className={`origin-left overflow-hidden font-display text-lg leading-7 text-text transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    brandCollapsed
                      ? "max-w-0 translate-x-[-0.12rem] scale-x-0 opacity-0"
                      : "max-w-[5.4rem] translate-x-0 scale-x-100 opacity-100"
                  }`}
                >
                  aransh
                </span>
              </span>

              <span className="inline-flex items-center overflow-hidden">
                <span className="font-display text-lg leading-7 text-text">K</span>
                <span
                  className={`origin-left overflow-hidden font-display text-lg leading-7 text-text transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    brandCollapsed
                      ? "max-w-0 translate-x-[0.12rem] scale-x-0 opacity-0"
                      : "max-w-[3.9rem] translate-x-0 scale-x-100 opacity-100"
                  }`}
                >
                  umar
                </span>
              </span>
            </span>
          </Link>

          <nav ref={desktopNavRef} className="relative hidden items-center gap-1 md:flex">
            {desktopHighlight ? (
              <motion.span
                aria-hidden="true"
                className="brand-gradient pointer-events-none absolute rounded-full shadow-[0_10px_24px_rgb(var(--accent-shadow)/0.18)]"
                animate={{
                  x: desktopHighlight.x,
                  y: desktopHighlight.y,
                  width: desktopHighlight.width,
                  height: desktopHighlight.height
                }}
                transition={highlightTransition}
              />
            ) : null}
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  ref={setDesktopItemRef(item.href)}
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative z-10 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-white"
                      : "text-muted hover:bg-surfaceAlt/70 hover:text-text"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-border/60 bg-surfaceAlt/70 text-text hover:border-accent/40 hover:text-accent"
              aria-label="Toggle color theme"
            >
              <SunMedium className="absolute h-4 w-4 rotate-90 scale-75 opacity-0 transition-all duration-300 ease-out dark:rotate-0 dark:scale-100 dark:opacity-100" />
              <MoonStar className="absolute h-4 w-4 rotate-0 scale-100 opacity-100 transition-all duration-300 ease-out dark:-rotate-90 dark:scale-75 dark:opacity-0" />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-surfaceAlt/70 text-text hover:border-accent/40 hover:text-accent md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="surface-card mt-3 rounded-[2.25rem] p-4 md:hidden">
            <nav ref={mobileNavRef} className="relative grid gap-2">
              {mobileHighlight ? (
                <motion.span
                  aria-hidden="true"
                  className="brand-gradient pointer-events-none absolute rounded-2xl shadow-[0_10px_24px_rgb(var(--accent-shadow)/0.18)]"
                  animate={{
                    x: mobileHighlight.x,
                    y: mobileHighlight.y,
                    width: mobileHighlight.width,
                    height: mobileHighlight.height
                  }}
                  transition={highlightTransition}
                />
              ) : null}
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    ref={setMobileItemRef(item.href)}
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`relative z-10 inline-flex items-center rounded-2xl px-5 py-3 text-sm font-medium transition-colors ${
                      active
                        ? "text-white"
                        : "bg-surfaceAlt/60 text-muted hover:text-text"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
