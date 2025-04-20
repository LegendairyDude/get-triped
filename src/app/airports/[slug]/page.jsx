"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { airports } from "@/data/airports";

export default function AirportDetailPage() {
  const { slug } = useParams();
  const code = slug?.toUpperCase();
  const airport = airports[code];

  if (!airport) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-3xl font-bold text-dark">Airport Not Found</h2>
        <Link
          href="/airports"
          className="inline-block mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-accent"
        >
          Back to Airports
        </Link>
      </div>
    );
  }

  const linkEntries = [
    airport.links.departuresGuide && {
      label: "Departures Guide",
      url: airport.links.departuresGuide,
    },
    airport.links.advancedCustomsDeclaration && {
      label: "Advanced Customs Declaration",
      url: airport.links.advancedCustomsDeclaration,
    },
    airport.links.interactiveMap && {
      label: "Interactive Map",
      url: airport.links.interactiveMap,
    },
    airport.links.terminalMaps && {
      label: "Terminal Maps",
      url: airport.links.terminalMaps,
    },
    airport.links.vipServices && {
      label: "VIP Services",
      url: airport.links.vipServices,
    },
    airport.links.map && { label: "Airport Map", url: airport.links.map },
    airport.links.eTicketForm && {
      label: "E‑Ticket Form",
      url: airport.links.eTicketForm,
    },
  ].filter(Boolean);

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <h1 className="text-4xl font-bold text-dark mb-2">
        {airport.code} – {airport.name}
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {airport.description}
      </p>

      {/* Carry‑On Rules */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-dark mb-2">
          Carry‑On Rules
        </h2>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-1">
          {airport.carryOnRules.map((rule, i) => (
            <li key={i}>{rule}</li>
          ))}
        </ul>
      </section>

      {/* Check‑In Recommendations */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-dark mb-2">
          Check‑In Recommendations
        </h2>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-1">
          {airport.checkIn.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Amenities */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-dark mb-2">
          Airport Amenities
        </h2>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-1">
          {airport.amenities.map((am, i) => (
            <li key={i}>{am}</li>
          ))}
        </ul>
      </section>

      {/* Useful Links */}
      {linkEntries.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-dark mb-2">
            Useful Links
          </h2>
          <ul className="list-disc pl-6 text-accent space-y-2">
            {linkEntries.map(({ label, url }, i) => (
              <li key={i}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Link
        href="/airports"
        className="inline-block bg-primary text-white py-2 px-4 rounded hover:bg-accent"
      >
        ← Back to Airports
      </Link>
    </div>
  );
}
