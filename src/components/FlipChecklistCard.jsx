"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/PrimaryButton";

export function FlipChecklistCard({ checklistData }) {
  const { title, shortDescription, detailedChecklist, actions } = checklistData;
  const [flipped, setFlipped] = useState(false);

  const variants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <div
      className="w-80 h-96 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={flipped ? "back" : "front"}
        variants={variants}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front Side: Summary */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-xl bg-white dark:bg-gray-800 flex flex-col p-4">
          <h2 className="text-2xl font-semibold text-dark mb-2">{title}</h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            {shortDescription}
          </p>
          <p className="text-xs text-gray-500 mt-auto">Click to view details</p>
        </div>
        {/* Back Side: Detailed Checklist */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-xl bg-white dark:bg-gray-800 p-6 flex flex-col"
          style={{ transform: "rotateY(180deg)" }}
        >
          <h2 className="text-2xl font-semibold text-dark mb-4">
            Checklist Details
          </h2>
          <div className="flex-1 overflow-y-auto mb-4">
            <ul className="list-disc ml-6 text-gray-800 dark:text-gray-300 space-y-2">
              {detailedChecklist.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex space-x-4">
            {actions.map((action, idx) => (
              <PrimaryButton
                key={idx}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card flip when clicking button
                  action.onClick();
                }}
              >
                {action.label}
              </PrimaryButton>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
