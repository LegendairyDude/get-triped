"use client";

import Image from "next/image";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-neutral-900 shadow">
      <div className="flex items-center space-x-4">
        <Image
          src="/getTripedlogo2.webp"
          alt="Get Triped Logo"
          width={100}
          height={40}
          className="object-contain"
        />
        <h1 className="text-2xl font-bold text-primary">
          Discover All-Inclusive Luxury
        </h1>
      </div>
    </header>
  );
}
