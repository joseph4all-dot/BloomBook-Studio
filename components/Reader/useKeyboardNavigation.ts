"use client";

import { useEffect } from "react";

type UseKeyboardNavigationProps = {
  enabled: boolean;
  onNext: () => void;
  onPrev: () => void;
  onFirst?: () => void;
  onLast?: () => void;
  onClose?: () => void;
};

export function useKeyboardNavigation({
  enabled,
  onNext,
  onPrev,
  onFirst,
  onLast,
  onClose,
}: UseKeyboardNavigationProps) {
  useEffect(() => {
    if (!enabled) return;

    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const tagName = target?.tagName?.toLowerCase();

      if (tagName === "input" || tagName === "textarea" || target?.isContentEditable) {
        return;
      }

      switch (event.key) {
        case "ArrowLeft":
        case "PageDown":
        case " ":
          event.preventDefault();
          onNext();
          break;

        case "ArrowRight":
        case "PageUp":
          event.preventDefault();
          onPrev();
          break;

        case "Home":
          event.preventDefault();
          onFirst?.();
          break;

        case "End":
          event.preventDefault();
          onLast?.();
          break;

        case "Escape":
          event.preventDefault();
          onClose?.();
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enabled, onNext, onPrev, onFirst, onLast, onClose]);
}