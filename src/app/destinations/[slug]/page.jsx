"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import destinationVisaInfo from "@/data/destinationVisaInfo.json";
import { InfoCard } from "@/components/InfoCard";

const { destinations } = destinationVisaInfo;

export default function DestinationDetailPage() {
  const { slug } = useParams();
  const destination = destinations.find(
    (dest) => dest.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!destination) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-3xl font-bold text-dark">Destination not found.</h2>
        <Link
          href="/destinations"
          className="inline-block mt-4 bg-primary text-dark font-semibold py-2 px-4 rounded hover:bg-accent transition-colors"
        >
          Back to Destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4 text-dark">{destination.name}</h1>
      <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl mb-6">
        <Image
          src="/images/destinations/pujBeachScape.webp" // You can choose an appropriate image based on destination
          alt={destination.name}
          fill
          className="object-cover"
        />
      </div>
      <InfoCard
        title="Entry Requirements"
        description="Review the entry requirements for this destination below."
      >
        <div className="space-y-2">
          <p>
            <strong>Visa Required:</strong>{" "}
            {destination.visaRequired ? "Yes" : "No"}
          </p>
          <div>
            <strong>Entry Documents:</strong>
            <ul className="list-disc ml-4">
              {destination.entryDocuments.map((doc, i) => (
                <li key={i}>{doc}</li>
              ))}
            </ul>
          </div>
          <p>
            <strong>E-Ticket Info:</strong> {destination.eTicketInfo}
          </p>
          <p>
            <strong>COVID-19 Guidelines:</strong> {destination.covidGuidelines}
          </p>
          <p>
            <strong>Notes:</strong> {destination.notes}
          </p>
        </div>
      </InfoCard>
      <Link
        href="/destinations"
        className="inline-block mt-6 mb-6 bg-primary text-dark font-semibold py-2 px-4 rounded hover:bg-accent transition-colors"
      >
        Back to Destinations
      </Link>
    </div>
  );
}
