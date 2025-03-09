"use client";
import React from "react";

export function InfoCard({ title, description, children, actions }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-6">
      <h2 className="text-2xl font-semibold text-dark mb-4">{title}</h2>
      {description && (
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      )}
      <div className="mb-4">{children}</div>
      {actions && (
        <div className="flex space-x-4">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              className="bg-primary text-dark font-semibold py-2 px-4 rounded hover:bg-accent transition-colors"
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
