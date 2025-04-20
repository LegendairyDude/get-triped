"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { InfoCard } from "@/components/InfoCard";
import { packing } from "@/data/packing";
import { destinations } from "@/data/destinations";

export default function PackingDetailPage() {
  const { slug } = useParams();
  // default to your “All‑Inclusive Necessities” if slug not found
  const data = packing[slug] || { necessities: packing.default, notes: "" };
  const dest = destinations.find((d) => d.slug === slug);

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <h1 className="text-4xl font-bold text-center mb-6 text-primary">
        {dest ? `Packing for ${dest.name}` : "All‑Inclusive Packing Guide"}
      </h1>

      <InfoCard
        title={
          dest ? `What to Bring to ${dest.name}` : "All‑Inclusive Necessities"
        }
        description={
          dest?.moreInfo || "Must‑bring items for an all‑inclusive resort stay."
        }
        actions={[
          {
            label: "Print / Download",
            onClick: () => window.print(),
          },
        ]}
      >
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
          {data.necessities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        {data.notes && (
          <p className="mt-4 text-sm italic text-gray-600 dark:text-gray-400">
            {data.notes}
          </p>
        )}
      </InfoCard>

      <div className="mt-8 text-center">
        <Link
          href="/packing"
          className="inline-block bg-primary text-white py-2 px-4 rounded hover:bg-accent"
        >
          ← Back to Packing Overview
        </Link>
      </div>
    </div>
  );
}
