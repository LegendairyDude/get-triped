"use client";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full p-4 bg-secondary shadow-lg">
      <div className="container mx-auto grid grid-cols-3 items-center">
        {/* Logo on the left */}
        <Link href="/" className="justify-self-start">
          <Image
            src="/THELogo.webp"
            alt="Get Triped Logo"
            width={120}
            height={48}
            className="object-contain"
          />
        </Link>

        {/* Centered title + subtitle */}
        <div className="col-start-2 text-center">
          <h1 className="text-3xl font-bold text-dark">Be your own agent</h1>
          <p className="mt-1 text-sm text-light">
            Get the trip you want; how you want
          </p>
        </div>

        {/* Empty div on the right */}
        <div className="justify-self-end" />
      </div>
    </header>
  );
}
