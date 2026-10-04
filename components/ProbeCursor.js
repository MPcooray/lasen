"use client";

import { useEffect } from "react";

export default function ProbeCursor() {
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return undefined;

    const glow = document.createElement("div");
    glow.className = "cursor-follow";
    glow.setAttribute("aria-hidden", "true");
    document.body.appendChild(glow);

    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let seen = false;
    let frame = 0;

    const follow = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      glow.style.transform = `translate(${cx}px, ${cy}px)`;
      frame = requestAnimationFrame(follow);
    };
    frame = requestAnimationFrame(follow);

    const onMove = (event) => {
      if (event.pointerType !== "mouse") return;
      x = event.clientX;
      y = event.clientY;
      if (!seen) {
        cx = x;
        cy = y;
        seen = true;
        glow.classList.add("is-on");
      }
    };

    const onDown = (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      const node = document.createElement("span");
      node.className = "click-node";
      node.setAttribute("aria-hidden", "true");
      node.style.left = `${event.clientX}px`;
      node.style.top = `${event.clientY}px`;
      node.innerHTML =
        '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="2.4"/><circle cx="12" cy="12" r="7.2"/><path d="M12 1.5v3.2M12 19.3v3.2M1.5 12h3.2M19.3 12h3.2"/></svg>';
      document.body.appendChild(node);
      node.addEventListener("animationend", () => node.remove());
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      glow.remove();
    };
  }, []);

  return null;
}
