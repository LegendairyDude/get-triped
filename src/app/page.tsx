"use client";

import { ResortCarousel } from "@/components/ResortCarousel";
import { resorts } from "@/data/resorts";

export default function Home() {
  return (
    <div className="min-h-screen bg-light text-dark flex flex-col">
      <section className="container mx-auto p-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-accent">
          Resorts of the Day
        </h2>
        <ResortCarousel resorts={resorts.slice(0, 5)} />
      </section>
    </div>
  );
}
