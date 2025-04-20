"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { resorts } from "@/data/resorts";

import ResortHero from "@/components/ResortHero";
import ResortOverview from "@/components/ResortOverview";
import ResortAmenities from "@/components/ResortAmenities";
import ResortRestaurants from "@/components/ResortRestaurants";
import ResortRooms from "@/components/ResortRooms";
import ResortGallery from "@/components/ResortGallery";

export default function ResortDetailPage() {
  const { slug } = useParams();
  const resort = resorts.find((res) => res.slug === slug);

  if (!resort) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-3xl font-bold text-dark">Resort Not Found</h2>
        <p className="mt-4 text-gray-800">
          We couldn't find the resort you're looking for.
        </p>
        <Link
          href="/resorts"
          className="inline-block mt-4 bg-primary text-dark font-semibold py-2 px-4 rounded hover:bg-accent transition-colors"
        >
          Back to Resorts
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 pb-20">
      <ResortHero resort={resort} />
      <ResortOverview resort={resort} />
      <ResortAmenities amenities={resort.amenities} />
      <ResortRestaurants restaurants={resort.restaurants} />
      <ResortRooms images={resort.images.rooms} />
      <ResortGallery images={resort.images} />
      <div className="mt-8 text-center">
        <Link
          href="/resorts"
          className="inline-block bg-primary text-dark font-semibold py-2 px-4 rounded hover:bg-accent transition-colors"
        >
          Back to Resorts
        </Link>
      </div>
    </div>
  );
}
