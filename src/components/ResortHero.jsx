// /components/ResortHero.jsx
import Image from "next/image";

export default function ResortHero({ resort }) {
  return (
    <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-2xl mb-8">
      <Image
        src={resort.imageUrl}
        alt={resort.title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute bottom-0 left-0 p-8">
        <h1 className="text-5xl font-bold text-white">{resort.title}</h1>
      </div>
    </div>
  );
}
