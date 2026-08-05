import { useEffect, useRef } from "react";

/**
 * Adds the `in-view` class to any descendant element carrying the
 * `scroll-reveal` class once it scrolls into view. Mount once near the
 * root of the page.
 */
export function useScrollReveal() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = Array.from(
      root.querySelectorAll<HTMLElement>(".scroll-reveal"),
    );
    if (targets.length === 0) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      for (const t of targets) {
        t.classList.add("in-view");
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    for (const t of targets) {
      observer.observe(t);
    }
    return () => observer.disconnect();
  }, []);

  return ref;
}
