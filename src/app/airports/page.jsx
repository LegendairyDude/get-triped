// app/airport/page.jsx
"use client";

export default function AirportsPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Airports & Travel Tips</h2>
      <ul className="list-disc pl-6 text-gray-300">
        <li>
          <strong>Plan Ahead:</strong> Check-in online and know your terminal.
        </li>
        <li>
          <strong>Security:</strong> Follow TSA guidelines and pack your
          carry-on appropriately.
        </li>
        <li>
          <strong>Documentation:</strong> Have your passport, visa, and travel
          documents ready.
        </li>
        <li>
          <strong>Time Management:</strong> Arrive early to allow for delays at
          security or customs.
        </li>
        <li>
          <strong>Airport Amenities:</strong> Many airports offer lounges, free
          WiFi, and dining options.
        </li>
      </ul>
      <p className="mt-4 text-gray-300">
        <em>Tip:</em> Download your airport's app for real-time updates on gate
        changes and delays.
      </p>
    </div>
  );
}
