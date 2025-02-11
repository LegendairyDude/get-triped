"use client";

import Image from "next/image";
import theme from "@/theme/colors";
import{ FloatingDock } from "../../components/ui/floating-dock";
import { FaGlobe, FaPlane, FaSuitcase, FaHotel } from 'react-icons/fa';

export default function Home() {


  const yourItems = [
    {
      id: 1,
      icon: <FaGlobe />,  // Globe icon
      title: "Home",
      link: "/home",
    },
    {
      id: 2,
      icon: <FaPlane />,  // Plane icon
      title: "Search",
      link: "/search",
    },
    {
      id: 3,
      icon: <FaSuitcase />,  // Suitcase icon
      title: "Notifications",
      link: "/notifications",
    },
    {
      id: 4,
      icon: <FaHotel />,  // Hotel icon
      title: "Settings",
      link: "/settings",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      {/* Logo */}
      <Image 
        src="/getTripedlogo2.webp" 
        alt="Get Triped Logo" 
        width={250} 
        height={100} 
        className="mb-6"
      />

      {/* Headline & CTA */}
      <h1 className="text-5xl font-bold text-primary text-center">
        Discover All-Inclusive Luxury
      </h1>
      <p className="mt-4 text-lg text-gray-400 text-center max-w-lg">
        Experience the world's most breathtaking destinations with top-tier accommodations, gourmet dining, and unforgettable activities.
      </p>

      {/* CTA Button */}
      <button 
        className="mt-6 bg-primary text-black px-6 py-3 rounded-lg hover:bg-secondary transition font-semibold"
      >
        Explore Packages
      </button>
      <FloatingDock
      items={yourItems}
      desktopClassName="yourDesktopClassName"
      mobileClassName="yourMobileClassName"
    />
    </main>
  );
}
