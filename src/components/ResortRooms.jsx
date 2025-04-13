// /components/ResortRooms.jsx
import Image from "next/image";

export default function ResortRooms({ images }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold mb-4 text-dark">
        Room & Suite Views
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative h-64 w-full rounded-lg overflow-hidden shadow"
          >
            <Image
              src={src}
              alt={`Room ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
