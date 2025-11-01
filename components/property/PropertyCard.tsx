export default function PropertyCard({ property }) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-40 object-cover rounded-md"
      />

      <h2 className="text-xl font-bold mt-2">{property.title}</h2>
      <p className="text-gray-600">{property.location}</p>

      <p className="font-semibold mt-2">
        ${property.price} / night
      </p>

      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md">
        View Details
      </button>
    </div>
  );
}
