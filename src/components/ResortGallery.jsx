"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ResortGallery({ images }) {
  // Extract categories from the passed images object (e.g., grounds, pools, rooms, restaurants, amenities)
  const categories = Object.keys(images);

  // State for the active category/tab. Default is "All".
  const [activeCategory, setActiveCategory] = useState("All");

  const handleTabClick = (category) => {
    setActiveCategory(category);
  };

  // Build a flat array of all images with the category attached.
  const flattenedImages = [];
  for (const category of categories) {
    const imgs = images[category] || [];
    for (const src of imgs) {
      flattenedImages.push({ src, category });
    }
  }

  // Determine which images to display based on the active tab.
  let displayedImages = [];
  if (activeCategory === "All") {
    displayedImages = flattenedImages;
  } else {
    displayedImages = flattenedImages.filter(
      (img) => img.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }

  // Tab labels: "All" plus each specific category.
  const tabLabels = ["All", ...categories];

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold mb-4 text-dark">Gallery</h2>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6">
        {tabLabels.map((label) => (
          <button
            key={label}
            className={`py-2 px-4 rounded transition-colors ${
              activeCategory === label
                ? "bg-primary text-dark font-semibold"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => handleTabClick(label)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      {displayedImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {displayedImages.map((img, index) => (
            <div
              key={index}
              className="relative h-48 w-full rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={img.src}
                alt={`${img.category} ${index + 1}`}
                fill
                className="object-cover"
              />
              {/* When in "All" mode, display a small badge with the category */}
              {activeCategory === "All" && (
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white text-xs p-1">
                  {img.category}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No images available for this category.</p>
      )}
    </div>
  );
}
