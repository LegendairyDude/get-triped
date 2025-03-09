// app/destinations/[slug]/page.jsx
"use client";
import { useParams } from "next/navigation";
import { destinations } from "@/data/destinationVisaInfo.json"; // Adjust the import as needed

export default function DestinationDetailPage() {
  const { slug } = useParams();
  const destination = destinations.find(
    (dest) => dest.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!destination) {
    return <div>Destination not found.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{destination.name}</h1>
      <div className="mb-4">
        <strong>Visa Required:</strong>{" "}
        {destination.visaRequired ? "Yes" : "No"}
      </div>
      <div className="mb-4">
        <strong>Entry Documents:</strong>
        <ul className="list-disc ml-6">
          {destination.entryDocuments.map((doc, i) => (
            <li key={i}>{doc}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <strong>E-Ticket Info:</strong> {destination.eTicketInfo}
      </div>
      <div className="mb-4">
        <strong>COVID-19 Guidelines:</strong> {destination.covidGuidelines}
      </div>
      <div>
        <strong>Notes:</strong> {destination.notes}
      </div>
    </div>
  );
}
