"use client";

import Image from "next/image";

export function Header() {
  return (
    <header className="w-full p-4 bg-gradient-to-r from-primary to-accent shadow-lg">
      <div className="container mx-auto flex items-center justify-center space-x-4">
        <Image
          src="/THELogo.webp"
          alt="Get Triped Logo"
          width={120}
          height={48}
          className="object-contain"
        />
        <h1 className="text-3xl font-bold text-dark">
          Your destination for your destination
        </h1>
      </div>
    </header>
  );
}
