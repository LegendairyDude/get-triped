"use client";

import Link from "next/link";
import { InfoCard } from "@/components/InfoCard";
import { packing } from "@/data/packing";
import { destinations } from "@/data/destinations";

export default function PackingPage() {
  // the “default” slot in packing.js
  const defaultChecklist = packing.default;

  // all other slugs (e.g. "dominican-republic", "costa-rica", …)
  const regionSlugs = Object.keys(packing).filter((s) => s !== "default");

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <h1 className="text-4xl font-bold text-center mb-12 text-primary">
        Packing & Travel Tips
      </h1>

      {/* Core “All‑Inclusive Necessities” */}
      <InfoCard
        title="All‑Inclusive Necessities"
        description="Must‑bring items for any all‑inclusive resort stay"
        actions={[
          {
            label: "Print / Download",
            onClick: () => window.print(),
          },
        ]}
      >
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
          {defaultChecklist.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </InfoCard>

      {/* Destination‑Specific Guides */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-dark mb-4">
          Destination‑Specific Packing Guides
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {regionSlugs.map((slug) => {
            // find the friendly name from your destinations data
            const dest = destinations.find((d) => d.slug === slug);
            const label = dest?.name || slug.replace(/-/g, " ");
            return (
              <li key={slug}>
                <Link
                  href={`/packing/${slug}`}
                  className="text-accent hover:underline"
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
