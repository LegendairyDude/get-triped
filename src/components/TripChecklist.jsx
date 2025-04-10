"use client";
import React from "react";
import { PrimaryButton } from "@/components/PrimaryButton"; // or define your own button style

export function TripChecklist({ mustBring, needToGet, alreadyHave }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-6">
      <h2 className="text-2xl font-semibold text-dark mb-4">Trip Checklist</h2>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-dark">Must Bring</h3>
        <ul className="list-disc ml-6 text-gray-800 dark:text-gray-200">
          {mustBring.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-dark">Need To Get</h3>
        <ul className="list-disc ml-6 text-gray-800 dark:text-gray-200">
          {needToGet.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-dark">Already Have</h3>
        <ul className="list-disc ml-6 text-gray-800 dark:text-gray-200">
          {alreadyHave.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex space-x-4">
        <PrimaryButton onClick={() => console.log("Download Checklist")}>
          Download Checklist
        </PrimaryButton>
        <PrimaryButton onClick={() => console.log("Print Checklist")}>
          Print Checklist
        </PrimaryButton>
      </div>
    </div>
  );
}
