"use client";

import { InfoCard } from "@/components/InfoCard";

export default function PackingPage() {
  const packingChecklist = [
    "Passport, travel documents, and visas",
    "Credit cards, cash, and travel money belt",
    "Medications and personal care items",
    "Versatile clothing and comfortable shoes",
    "Electronics: smartphone, charger, power bank, camera",
  ];

  const travelProTips = [
    "Book flights in advance for the best deals.",
    "Always carry a reusable water bottle.",
    "Learn basic phrases in the local language.",
    "Keep digital copies of important documents.",
  ];

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <h1 className="text-4xl font-bold text-center mb-12 text-primary">
        Packing & Travel Tips
      </h1>
      <div className="space-y-8">
        <InfoCard
          title="Recommended Packing List"
          description="Essential items to make your journey stress-free and enjoyable."
          actions={[
            {
              label: "View Checklist",
              onClick: () => console.log("View checklist clicked"),
            },
            {
              label: "Print / Download",
              onClick: () => console.log("Print checklist clicked"),
            },
          ]}
        >
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
            {packingChecklist.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </InfoCard>
        <InfoCard
          title="Travel Pro Tips"
          description="Maximize your travel experience with these expert recommendations."
          actions={[
            {
              label: "View Tips",
              onClick: () => console.log("View tips clicked"),
            },
            {
              label: "Print / Download",
              onClick: () => console.log("Print tips clicked"),
            },
          ]}
        >
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
            {travelProTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </InfoCard>
      </div>
    </div>
  );
}
