import { useEffect } from "react";

interface ModalEffectsOptions {
  /**
   * CSS selector for an inner region that should keep its native touch
   * scrolling. Touch moves outside of it are blocked so the page underneath
   * stays put. When omitted, all touch scrolling is blocked while open.
   */
  scrollableSelector?: string;
}

/**
 * Shared modal side effects: locks body scroll, blocks background touch
 * scrolling and closes on the Escape key while the modal is open.
 */
export function useModalEffects(
  isOpen: boolean,
  onClose: () => void,
  { scrollableSelector }: ModalEffectsOptions = {}
) {
  useEffect(() => {
    if (!isOpen) return;

    const preventTouchMove = (event: TouchEvent) => {
      if (!scrollableSelector) {
        event.preventDefault();
        return;
      }
      const scrollable = document.querySelector(scrollableSelector);
      if (!scrollable || !scrollable.contains(event.target as Node)) {
        event.preventDefault();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.addEventListener("touchmove", preventTouchMove, {
      passive: false,
    });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.removeEventListener("touchmove", preventTouchMove);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, scrollableSelector]);
}
