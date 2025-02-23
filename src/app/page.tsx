// app/page.jsx
"use client";

import { ResortCarousel } from "@/components/ResortCarousel";
import { resorts } from "@/data/resorts";

export default function Home() {
  return (
    // TODO: PAGE BG COLOR FOUND HERE
    <div className="min-h-screen bg-secondary text-white flex flex-col">
      {/* Page-specific content; the Header, FloatingDock, and Footer come from the global layout */}
      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Resorts of the Day</h2>
        <ResortCarousel resorts={resorts.slice(0, 5)} />
      </section>
    </div>
  );
}
