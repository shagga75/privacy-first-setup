"use client";

import { useState, type ReactNode } from "react";

export function RedactedReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const [revealed, setRevealed] = useState(false);

  return (
    <span
      role="button"
      tabIndex={0}
      aria-pressed={revealed}
      aria-label="Revelar contenido redactado"
      data-revealed={revealed}
      onClick={() => setRevealed((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setRevealed((v) => !v);
        }
      }}
      className={`redacted ${className}`}
    >
      <span className="redacted-content">{children}</span>
      <span className="redacted-bar" aria-hidden="true" />
    </span>
  );
}
