"use client";

import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";

export default function DestinationsPage() {
  return (
    <div className="px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-10 text-primary">
        All Inclusive Destinations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {destinations.map((dest, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="relative h-40">
              <Image
                src={dest.imageUrl}
                alt={dest.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-dark mb-2">
                {dest.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                {dest.description}
              </p>
              <Link
                href={`/destinations/${dest.slug}`}
                className="bg-primary text-dark font-semibold py-2 px-4 rounded hover:bg-accent transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
