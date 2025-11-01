export default function PropertyDetail({ property }) {
  if (!property) return null;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-80 object-cover rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600 mt-2">{property.location}</p>

      <p className="mt-2 text-lg font-semibold">
        ${property.price} / night
      </p>

      <p className="mt-4">{property.description}</p>
     


      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg">
        Book Now
      </button>
       <ReviewSection propertyId={property.id} />
    </div>
  );
}
