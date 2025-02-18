// app/resorts/page.jsx
"use client";

import { FlipTravelPackageCard } from "@/components/FlipTravelPackageCard";
import { resorts } from "@/data/resorts";

export default function ResortsPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Resorts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {resorts.map((resort, idx) => (
          <FlipTravelPackageCard key={idx} packageData={resort} />
        ))}
      </div>
    </div>
  );
}
