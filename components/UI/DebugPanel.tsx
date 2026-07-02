"use client";

import { useEffect, useState } from "react";

export default function DebugPanel() {
  const [fps, setFps] = useState(0);

  useEffect(() => {
    let frames = 0;
    let last = performance.now();
    let id: number;

    const loop = (now: number) => {
      frames++;

      if (now - last >= 1000) {
        setFps(frames);
        frames = 0;
        last = now;
      }

      id = requestAnimationFrame(loop);
    };

    id = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 9999,
        padding: "12px 16px",
        background: "rgba(0,0,0,.75)",
        color: "#00ff88",
        borderRadius: 12,
        fontFamily: "monospace",
        fontSize: 14,
      }}
    >
      <strong>BloomBook Debug</strong>
      <div>FPS: {fps}</div>
    </div>
  );
}