"use client";

import { useState } from "react";

export function Footer() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* Invisible hover trigger */}
      <div
        className="fixed bottom-0 left-0 w-full h-6 z-40"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      ></div>
      {/* Footer content */}
      <div
        className={`fixed bottom-0 left-0 w-full z-40 transition-all duration-300 bg-gray-800 text-white flex items-center justify-center overflow-hidden ${
          hovered ? "h-16" : "h-0"
        }`}
      >
        <p className="text-sm p-2">
          © {new Date().getFullYear()} Your Travel Website. All rights reserved.
        </p>
      </div>
    </>
  );
}
