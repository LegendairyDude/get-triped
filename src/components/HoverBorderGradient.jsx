"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = motion.div, // default to a motion div so we can use whileHover
  duration = 1,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  // Using a static direction for a static border when not hovered
  const direction = "TOP";

  const movingMap = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255,255,255,0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255,255,255,0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, hsl(0,0%,100%) 0%, rgba(255,255,255,0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.2% at 100% 50%, hsl(0,0%,100%) 0%, rgba(255,255,255,0) 100%)",
  };

  // Pink highlight gradient for hover
  const highlight =
    "radial-gradient(75% 181% at 50% 50%, #FF007F 0%, rgba(255,255,255,0) 100%)";

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.05 }} // expand effect on hover
      className={cn(
        // Use fixed padding so the border gap is consistent
        "relative flex rounded-lg border bg-transparent transition duration-500 items-center justify-center py-[8px] px-[4px] w-fit",
        containerClassName
      )}
      {...props}
    >
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
      <div className="absolute inset-y-[2px] inset-x-[1px] z-10 pointer-events-none rounded-[inherit]" />
    </Tag>
  );
}
