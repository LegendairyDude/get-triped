"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { destinations } from "@/data/destinations";

export default function DestinationHighlightPage() {
  const { slug } = useParams();

  // Find the destination by slug
  const destination = destinations.find((dest) => dest.slug === slug);

  if (!destination) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-3xl font-bold">Destination Not Found</h2>
        <p className="mt-4">
          We couldn't find the destination you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-dark">{destination.name}</h1>
      <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg mb-6">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-gray-700 mb-6">{destination.description}</p>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2 text-dark">
          More Information
        </h2>
        <p className="text-gray-700">{destination.moreInfo}</p>
      </div>
      {/* You can later add more sections for amenities, restaurants, etc. */}
    </div>
  );
}
