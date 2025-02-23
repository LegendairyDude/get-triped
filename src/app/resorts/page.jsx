"use client";

import { FlipTravelPackageCard } from "@/components/FlipTravelPackageCard";
import { resorts } from "@/data/resorts";

export default function ResortsPage() {
  return (
    <div className="px-4 py-8 pb-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-primary">
        Featured Resorts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {resorts.map((resort, idx) => (
          <div key={idx} className="cursor-pointer">
            <FlipTravelPackageCard packageData={resort} />
          </div>
        ))}
      </div>
    </div>
  );
}
