import React from "react";

function PetGallery() {
  const pets = [
    {
      id: 1,
      name: "Fluffy",
      gender: "Male",
      location: "New York, NY",
      image: "pet1.jpg",
    },
    {
      id: 2,
      name: "Whiskers",
      gender: "Female",
      location: "Los Angeles, CA",
      image: "pet2.jpg",
    },
    {
      id: 3,
      name: "Buddy",
      gender: "Male",
      location: "Houston, TX",
      image: "pet3.jpg",
    },
    // Add more pets as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pets.map((pet) => (
        <div key={pet.id} className="bg-white p-4 rounded-md shadow-md">
          <img
            src={pet.image}
            alt={pet.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold mt-2">{pet.name}</h3>
          <p className="text-gray-600">{pet.gender}</p>
          <p className="text-gray-600">{pet.location}</p>
          <div className="mt-4 space-x-2">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Call
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
              WhatsApp
            </button>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
              Book
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PetGallery;
