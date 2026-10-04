"use client";

import { useEffect, useState } from "react";

export default function Readout() {
  const [point, setPoint] = useState(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return undefined;

    const onMove = (event) => {
      if (event.pointerType !== "mouse") return;
      setPoint({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (!point) return null;

  const pad = (value) => String(Math.round(value)).padStart(4, "0");

  return (
    <p className="readout" aria-hidden="true">
      <span>X {pad(point.x)}</span>
      <span>Y {pad(point.y)}</span>
    </p>
  );
}
