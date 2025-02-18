// app/packing/page.jsx
"use client";

export default function PackingPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Packing Guide</h2>
      <ul className="list-disc pl-6 text-gray-300">
        <li>
          <strong>Essentials:</strong> Passport, travel documents, medication,
          chargers.
        </li>
        <li>
          <strong>Clothing:</strong> Versatile outfits, comfortable shoes,
          weather-appropriate gear.
        </li>
        <li>
          <strong>Gadgets:</strong> Smartphone, power bank, camera, universal
          adapter.
        </li>
        <li>
          <strong>Toiletries:</strong> Travel-sized toiletries, sunscreen, and
          personal care items.
        </li>
        <li>
          <strong>Extras:</strong> A good book, travel journal, snacks, and
          reusable water bottle.
        </li>
      </ul>
      <p className="mt-4 text-gray-300">
        <em>Tip:</em> Always pack a little extra for unexpected adventures!
      </p>
    </div>
  );
}
