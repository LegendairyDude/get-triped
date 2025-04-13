// /components/ResortRestaurants.jsx
export default function ResortRestaurants({ restaurants }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold mb-4 text-dark">
        Dining Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold text-dark">{restaurant.name}</h3>
            <p className="text-gray-600">Theme: {restaurant.theme}</p>
            <p className="text-gray-600">Cuisine: {restaurant.cuisine}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
