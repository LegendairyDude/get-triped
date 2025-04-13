// /components/ResortAmenities.jsx
export default function ResortAmenities({ amenities }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold mb-4 text-dark">
        Amenities & Features
      </h2>
      <ul className="grid grid-cols-2 gap-4">
        {amenities.map((item, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded shadow">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
