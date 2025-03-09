"use client";

import { InfoCard } from "@/components/InfoCard";

export default function PackingPage() {
  return (
    <div className="container mx-auto px-4 py-8 pb-20">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        Packing & Travel Tips
      </h1>

      {/* Recommended Packing List Card */}
      <InfoCard
        title="Recommended Packing List"
        description="Essential items to make your journey stress-free and enjoyable."
        actions={[
          {
            label: "Download Checklist",
            onClick: () => console.log("Download clicked"),
          },
          {
            label: "Print Checklist",
            onClick: () => console.log("Print clicked"),
          },
        ]}
      >
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
          <li>Passport, travel documents, and visas</li>
          <li>Credit cards, cash, and travel money belt</li>
          <li>Medications and personal care items</li>
          <li>Versatile clothing and comfortable shoes</li>
          <li>Electronics: smartphone, charger, power bank, camera</li>
        </ul>
      </InfoCard>

      {/* Travel Pro Tips Card */}
      <InfoCard
        title="Travel Pro Tips"
        description="Maximize your travel experience with these expert recommendations."
        actions={[
          {
            label: "Download Tips",
            onClick: () => console.log("Download tips clicked"),
          },
        ]}
      >
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
          <li>Book flights in advance for the best deals.</li>
          <li>Always carry a reusable water bottle.</li>
          <li>Learn basic phrases in the local language.</li>
          <li>Keep digital copies of important documents.</li>
        </ul>
      </InfoCard>
    </div>
  );
}
