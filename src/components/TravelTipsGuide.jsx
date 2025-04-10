"use client";
import React from "react";
import { PrimaryButton } from "@/components/PrimaryButton";

export function TravelTipsGuide({ destination, tips }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-6">
      <h2 className="text-2xl font-semibold text-dark mb-4">
        Travel Tips for {destination}
      </h2>
      <ul className="list-disc ml-6 text-gray-800 dark:text-gray-200 mb-4">
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
      <div className="flex space-x-4">
        <PrimaryButton onClick={() => console.log("Download Tips")}>
          Download Tips
        </PrimaryButton>
        <PrimaryButton onClick={() => console.log("Print Tips")}>
          Print Tips
        </PrimaryButton>
      </div>
    </div>
  );
}
