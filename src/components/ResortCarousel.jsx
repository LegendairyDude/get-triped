"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { TravelPackageCard } from "@/components/TravelPackageCard";
import { HoverBorderGradient } from "@/components/HoverBorderGradient";

export function ResortCarousel({ resorts, speed = 20 }) {
  // Duplicate the items so one complete set follows the other.
  const carouselItems = [...resorts, ...resorts];
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const [setWidth, setSetWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // This ref holds the current scroll speed (in pixels per second)
  const currentSpeed = useRef(speed);

  // Measure the width of one set of items (half the total scrollable width)
  useEffect(() => {
    if (containerRef.current) {
      setSetWidth(containerRef.current.scrollWidth / 2);
    }
  }, [carouselItems]);

  // Update x every frame with gradual deceleration/acceleration
  useAnimationFrame((t, delta) => {
    // delta is in ms.
    if (isPaused) {
      // Gradually reduce currentSpeed down to 0
      currentSpeed.current = Math.max(currentSpeed.current * 0.95, 0);
    } else {
      // Gradually accelerate currentSpeed back to full speed
      currentSpeed.current =
        currentSpeed.current + (speed - currentSpeed.current) * 0.1;
    }

    // Calculate movement for this frame.
    const moveBy = (currentSpeed.current * delta) / 1000;
    const newX = x.get() - moveBy;
    if (newX <= -setWidth) {
      x.set(newX + setWidth);
    } else {
      x.set(newX);
    }
  });

  return (
    <div className="overflow-hidden relative w-full py-4">
      <motion.div ref={containerRef} className="flex" style={{ x }}>
        {carouselItems.map((resort, index) => (
          <div
            key={index}
            className="min-w-[300px] mx-4"
            // Only pause when mouse is directly over the card.
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <HoverBorderGradient duration={1} containerClassName="w-full">
              <TravelPackageCard packageData={resort} />
            </HoverBorderGradient>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
