"use client";

import Image from "next/image";

export function TravelPackageCard({ packageData }) {
  // Destructure package details from props
  const { title, imageUrl, description, price, rating } = packageData;

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="px-4 py-3">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold text-primary">${price}</span>
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
  );
}
