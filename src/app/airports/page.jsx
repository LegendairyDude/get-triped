"use client";

import Link from "next/link";
import { airports } from "@/data/airports";

export default function AirportsPage() {
  const hubList = Object.values(airports);

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">
        Airports & Travel Tips
      </h1>

      {/* Your overview sections go here */}

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-dark mb-4">
          Quick Links to Airport Guides
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {hubList.map(({ code, name, city }) => {
            const slug = code.toLowerCase();
            return (
              <li key={code}>
                <Link
                  href={`/airports/${slug}`}
                  className="text-accent hover:underline"
                >
                  {code} – {name} ({city})
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
