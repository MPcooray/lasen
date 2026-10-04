"use client";

import { useState } from "react";

const sheets = [
  {
    no: "01",
    title: "Circuit fundamentals",
    chips: ["Analysis", "Measurement"],
    text: "Checking a result against both the equation and the instrument.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="2" y="30" width="14" height="4" rx="1" />
        <rect x="48" y="30" width="14" height="4" rx="1" />
        <rect x="14" y="20" width="36" height="24" rx="6" />
        <rect className="cut" x="22" y="20" width="3.2" height="24" />
        <rect className="cut" x="30.4" y="20" width="3.2" height="24" />
        <rect className="cut" x="38.8" y="20" width="3.2" height="24" />
      </svg>
    ),
  },
  {
    no: "02",
    title: "Analog & digital electronics",
    chips: ["Circuits", "Logic"],
    text: "From discrete electronics to a design that has to live on hardware.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="6" y="22" width="8" height="3.2" rx="0.6" />
        <rect x="6" y="30.4" width="8" height="3.2" rx="0.6" />
        <rect x="6" y="38.8" width="8" height="3.2" rx="0.6" />
        <rect x="50" y="22" width="8" height="3.2" rx="0.6" />
        <rect x="50" y="30.4" width="8" height="3.2" rx="0.6" />
        <rect x="50" y="38.8" width="8" height="3.2" rx="0.6" />
        <rect x="18" y="14" width="28" height="36" rx="4" />
        <rect className="cut" x="26" y="24" width="12" height="16" rx="1.5" />
      </svg>
    ),
  },
  {
    no: "03",
    title: "Signals & processing",
    chips: ["Waveforms", "Information"],
    text: "How a signal carries information, and what it takes to shape it.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="6" y="8" width="52" height="40" rx="6" />
        <rect className="cut" x="10" y="12" width="44" height="32" rx="3" />
        <path d="M12 36c4 0 4-14 8-14s4 18 8 18 4-16 8-16 4 12 8 12 4-6 8-6v10H12Z" />
        <rect x="26" y="50" width="12" height="3" />
        <rect x="18" y="53" width="28" height="4" rx="1" />
      </svg>
    ),
  },
  {
    no: "04",
    title: "Power & telecommunication",
    chips: ["Power", "Communication"],
    text: "Machines, networks, and links at a scale bigger than one board.",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path fillRule="evenodd" d="M30 4h4L48 52H16L30 4zm2 14 8 30H24l8-30z" />
        <rect x="20" y="52" width="24" height="5" rx="1" />
        <path d="M50 14a14 14 0 0 1 0 18l-3.2-2.6a10 10 0 0 0 0-12.8Z" />
        <path d="M55 8a22 22 0 0 1 0 30l-3-2.4a18 18 0 0 0 0-25.2Z" />
      </svg>
    ),
  },
];

export default function EngineeringBench() {
  const [active, setActive] = useState(0);
  const current = sheets[active];

  return (
    <>
      <p className="bench-status">
        On the bench · Sheet {current.no} · {current.title}
      </p>
      <div className="sheets">
        {sheets.map((sheet, index) => (
          <button
            key={sheet.no}
            type="button"
            className={`sheet${index === active ? " is-live" : ""}`}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
          >
            <div>
              <p className="sheet-no">Sheet {sheet.no}</p>
              <h3>{sheet.title}</h3>
              <p className="chips">
                {sheet.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </p>
              <p>{sheet.text}</p>
            </div>
            <figure className="sheet-fig">{sheet.icon}</figure>
          </button>
        ))}
      </div>
    </>
  );
}
