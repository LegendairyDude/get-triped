// /components/ResortOverview.jsx
export default function ResortOverview({ resort }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold mb-4 text-dark">Overview</h2>
      <p className="text-gray-800 mb-4">{resort.description}</p>
      <p className="text-gray-700">{resort.moreInfo}</p>
    </div>
  );
}
