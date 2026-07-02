import { useEffect, useMemo, useState } from "react";

export function useImagePreloader(images: string[]) {
  const uniqueImages = useMemo(() => Array.from(new Set(images)), [images]);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoadedCount(0);

    uniqueImages.forEach((src) => {
      const img = new Image();

      img.onload = img.onerror = () => {
        if (!cancelled) {
          setLoadedCount((count) => count + 1);
        }
      };

      img.src = src;
    });

    return () => {
      cancelled = true;
    };
  }, [uniqueImages]);

  return {
    loadedCount,
    totalCount: uniqueImages.length,
    isReady: loadedCount >= uniqueImages.length,
  };
}