"use client";

import { Header } from "@/components/Header";
import { FloatingDock } from "@/components/floating-dock";
import { Footer } from "@/components/Footer";
import { ResortCarousel } from "@/components/ResortCarousel";
import { resorts } from "@/data/resorts"; 
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

      {/* "Resorts of the Day" Carousel */}
      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Resorts of the Day</h2>
        <ResortCarousel resorts={resorts.slice(0, 5)} />
      </section>

      {/* Floating Dock Navbar (fixed at bottom) */}
      <FloatingDock
        items={yourItems}
        desktopClassName="fixed bottom-0 left-0 w-full flex justify-center z-50"
        mobileClassName="hidden"
      />
    </div>
  );
}
