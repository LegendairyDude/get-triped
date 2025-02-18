"use client";
import { useState } from "react";

export function Footer() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className="fixed bottom-0 left-0 w-full h-6 z-40"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      ></div>
      <div
        className={`fixed bottom-0 left-0 w-full z-40 transition-all duration-300 bg-accent text-white flex items-center justify-center overflow-hidden ${
          hovered ? "h-16" : "h-0"
        }`}
      >
        <p className="text-sm p-2">
          © {new Date().getFullYear()} Get Triped. All rights reserved.
        </p>
      </div>
    </>
  );
}
