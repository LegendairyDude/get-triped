"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PrimaryButton } from "@/components/PrimaryButton";

export function FlipTravelPackageCard({ packageData }) {
  const {
    title,
    imageUrl,
    description,
    price,
    rating,
    moreInfo,
    numPools,
    numRooms,
    restaurants,
    amenities,
  } = packageData;
  const [flipped, setFlipped] = useState(false);

  // Variants for the flip animation (front/back)
  const variants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  // Generate a slug from the title (simple version)
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  // Format restaurant items as bullet points
  const restaurantItems = restaurants?.map((r, i) => (
    <li key={i} className="ml-4">
      {r.name} ({r.theme}, {r.cuisine})
    </li>
  ));

  // Format amenities as bullet points
  const amenitiesItems = amenities?.map((amenity, i) => (
    <li key={i} className="ml-4">
      {amenity}
    </li>
  ));

  return (
    <div
      className="w-80 h-96 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={flipped ? "back" : "front"}
        variants={variants}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 flex flex-col">
          <div className="relative h-48 w-full">
            <Image src={imageUrl} alt={title} fill className="object-cover" />
          </div>
          <div className="px-6 py-4 flex flex-col flex-1">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              {title}
            </h2>
            <p className="text-gray-700 dark:text-gray-700 text-sm mb-4 line-clamp-3">
              {description}
            </p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-2xl font-bold text-primary">${price}</span>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${
                      i < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927C9.424 2.066 10.576 2.066 10.951 2.927L12.43 6.145L15.97 6.635C16.881 6.754 17.245 7.925 16.657 8.513L14.004 11.17L14.779 14.677C14.938 15.588 14.01 16.294 13.176 15.833L10 14.003L6.824 15.833C5.99 16.294 5.062 15.588 5.221 14.677L5.996 11.17L3.343 8.513C2.755 7.925 3.119 6.754 4.03 6.635L7.57 6.145L9.049 2.927Z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Back Side */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-50 to-white p-6 flex flex-col"
          style={{ transform: "rotateY(180deg)" }}
        >
          <h2 className="text-2xl font-semibold text-black mb-4">
            {title} Details
          </h2>
          <div className="flex-1 overflow-y-auto p-2 shadow-inner rounded-md mb-2">
            <ul className="list-disc text-black">
              <li>
                <span className="font-semibold">Pools:</span> {numPools}
              </li>
              <li>
                <span className="font-semibold">Rooms:</span> {numRooms}
              </li>
              {restaurants && (
                <li>
                  <span className="font-semibold">
                    Restaurants ({restaurants.length}):
                  </span>
                  <ul className="list-disc">{restaurantItems}</ul>
                </li>
              )}
              {amenities && (
                <li>
                  <span className="font-semibold">Amenities:</span>
                  <ul className="list-disc">{amenitiesItems}</ul>
                </li>
              )}
            </ul>
          </div>
          <div className="mt-4 flex items-center justify-end">
            <PrimaryButton href={`/resorts/${slug}`}>
              View Details
            </PrimaryButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
