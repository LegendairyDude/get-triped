"use client";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full p-4 bg-[#e29680] shadow-lg">
      <div className="container mx-auto flex items-center justify-center space-x-4">
        <Link href="/">
          <Image
            src="/THELogo.webp"
            alt="Get Triped Logo"
            width={120}
            height={48}
            className="object-contain"
          />
        </Link>
        <h1 className="text-3xl font-bold text-dark">Be your own agent</h1>
        <h2>Get the trip you want; how you want</h2>
      </div>
    </header>
  );
}
