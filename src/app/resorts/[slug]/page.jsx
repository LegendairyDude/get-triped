"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { resorts } from "@/data/resorts";

export default function ResortDetailPage() {
  const { slug } = useParams();
  const resort = resorts.find((res) => res.slug === slug);

  if (!resort) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-3xl font-bold text-dark">Resort Not Found</h2>
        <p className="mt-4 text-gray-800">
          We couldn't find the resort you're looking for.
        </p>
        <Link
          href="/resorts"
          className="inline-block mt-4 bg-primary text-dark font-semibold py-2 px-4 rounded hover:bg-accent transition-colors"
        >
          Back to Resorts
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 pb-20">
      <h1 className="text-4xl font-bold mb-6 text-dark">{resort.title}</h1>
      <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl mb-6">
        <Image
          src={resort.imageUrl}
          alt={resort.title}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-gray-800 mb-6">{resort.description}</p>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-dark">Details</h2>
        <p className="text-gray-800">{resort.moreInfo}</p>
      </div>
      <Link
        href="/resorts"
        className="inline-block bg-primary text-dark font-semibold py-2 px-4 rounded hover:bg-accent transition-colors"
      >
        Back to Resorts
      </Link>
    </div>
  );
}
