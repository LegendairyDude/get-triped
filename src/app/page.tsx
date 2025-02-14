// src/app/page.jsx
"use client";

import { Header } from "@/components/Header";
import { TravelPackageCard } from "@/components/TravelPackageCard";
import { HoverBorderGradient } from "@/components/hover-border-gradient";
import { FloatingDock } from "@/components/floating-dock";
import { Footer } from "@/components/Footer";
import { resorts } from "@/data/resorts"; // Your 12 resort objects
import {
  IconMap2,
  IconBeach,
  IconLuggage,
  IconBuildingAirport,
} from "@tabler/icons-react";

export default function Home() {
  // Navigation items for the Floating Dock
  const yourItems = [
    {
      id: 1,
      icon: <IconMap2 className="h-6 w-6" />,
      title: "Destinations",
      href: "/destinations",
    },
    {
      id: 2,
      icon: <IconBeach className="h-6 w-6" />,
      title: "Resorts",
      href: "/resorts",
    },
    {
      id: 3,
      icon: <IconLuggage className="h-6 w-6" />,
      title: "Packing",
      href: "/packing",
    },
    {
      id: 4,
      icon: <IconBuildingAirport className="h-6 w-6" />,
      title: "Airports",
      href: "/airport",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content: Grid of Resort Cards */}
      <main className="flex-1 container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {resorts.map((resort, index) => (
          <HoverBorderGradient key={index} duration={1} containerClassName="w-full">
            <TravelPackageCard packageData={resort} />
          </HoverBorderGradient>
        ))}
      </main>

      {/* Floating Dock Navbar (fixed at bottom) */}
      <FloatingDock
        items={yourItems}
        desktopClassName="fixed bottom-0 left-0 w-full flex justify-center z-50"
        mobileClassName="hidden"
      />

      {/* Footer (appears on hover at the bottom) */}
      <Footer />
    </div>
  );
}
