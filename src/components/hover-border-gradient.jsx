"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "div",
  duration = 1,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  // Use a static direction for the border effect
  const direction = "TOP";

  const movingMap = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.2% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  // Pink highlight gradient for hover
  const highlight =
    "radial-gradient(75% 181% at 50% 50%, #FF007F 0%, rgba(255,255,255,0) 100%)";

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        // Use reduced horizontal padding: py-2 for vertical, px-1 for horizontal.
        "relative flex rounded-lg border bg-transparent transition duration-500 items-center justify-center py-2 px-1 w-fit",
        containerClassName
      )}
      {...props}
    >
      {/* Render children normally */}
      <div className={cn("z-10", className)}>{children}</div>
      <motion.div
        className="absolute inset-0 z-0 rounded-[inherit] overflow-hidden"
        style={{
          filter: "blur(2px)",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration }}
      />
      {/* Adjust inner overlay inset to be tighter on the sides */}
      <div className="absolute inset-y-[2px] inset-x-[1px] z-10 pointer-events-none rounded-[inherit]" />
    </Tag>
  );
}
