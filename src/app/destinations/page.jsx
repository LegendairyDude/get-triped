// app/destinations/page.jsx
"use client";

export default function DestinationsPage() {
  // Placeholder content for Destinations
  const destinations = [
    {
      name: "Spain",
      description: "Vibrant culture, historic sites, and beautiful beaches.",
    },
    {
      name: "Thailand",
      description: "Exotic food, tropical beaches, and rich traditions.",
    },
    // ... more destinations
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {destinations.map((dest, idx) => (
          <div key={idx} className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-primary">{dest.name}</h3>
            <p className="mt-2 text-gray-300">{dest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
