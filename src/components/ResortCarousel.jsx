"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { FlipTravelPackageCard } from "@/components/FlipTravelPackageCard";
import { cn } from "@/lib/utils";

export function ResortCarousel({ resorts, speed = 20 }) {
  // Duplicate the items for seamless looping
  const carouselItems = [...resorts, ...resorts];
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const [setWidth, setSetWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [outerHovered, setOuterHovered] = useState(false);
  const currentSpeed = useRef(speed);

  // Measure one set's width
  useEffect(() => {
    if (containerRef.current) {
      setSetWidth(containerRef.current.scrollWidth / 2);
    }
  }, [carouselItems]);

  useAnimationFrame((t, delta) => {
    if (isPaused) {
      currentSpeed.current = Math.max(currentSpeed.current * 0.95, 0);
    } else {
      currentSpeed.current =
        currentSpeed.current + (speed - currentSpeed.current) * 0.1;
    }
    const moveBy = (currentSpeed.current * delta) / 1000;
    const newX = x.get() - moveBy;
    if (newX <= -setWidth) {
      x.set(newX + setWidth);
    } else {
      x.set(newX);
    }
  });

  return (
    <div
      className={cn(
        "relative w-full py-4 transition-all duration-300 bg-primary overflow-hidden",
        outerHovered ? "overflow-x-auto" : "overflow-hidden"
      )}
      onMouseEnter={() => setOuterHovered(true)}
      onMouseLeave={() => setOuterHovered(false)}
    >
      <motion.div ref={containerRef} className="flex gap-x-6" style={{ x }}>
        {carouselItems.map((resort, index) => (
          <div
            key={index}
            className="w-80 h-96 flex-shrink-0 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <FlipTravelPackageCard packageData={resort} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
