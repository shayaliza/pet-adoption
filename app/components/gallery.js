"use client";
import React, { useState } from "react";
import { connectDb } from "../helper/db";

function PetGallery() {
  const [showForm, setShowForm] = useState(false);
  const [petInfo, setPetInfo] = useState({
    name: "",
    gender: "",
    location: "",
    image: "",
  });

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleCancelClick = () => {
    setShowForm(false);
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setPetInfo({ ...petInfo, [name]: value });
  // };

  const handleAddPet = () => {
    onAddPet({ ...petInfo, id: Date.now() }); // Generate a unique ID
    setPetInfo({ name: "", gender: "", location: "", image: "" });
    setShowForm(false);
  };

  //
  const [pets, setPets] = useState([
    {
      id: 1,
      name: "Fluffy",
      gender: "Male",
      location: "New York, NY",
      image: "https://dummyimage.com/300",
    },
  ]);

  const [newPet, setNewPet] = useState({
    name: "",
    gender: "",
    location: "",
    image: "",
  });

  const addPet = () => {
    if (newPet.name && newPet.gender && newPet.location && newPet.image) {
      setPets([...pets, { ...newPet, id: Date.now() }]);
      setNewPet({ name: "", gender: "", location: "", image: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPet((prevPet) => ({
      ...prevPet,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="bg-white p-4 rounded-md shadow-md">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newPet.name}
          onChange={handleInputChange}
          className="w-full p-2 mb-2 rounded-md"
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={newPet.gender}
          onChange={handleInputChange}
          className="w-full p-2 mb-2 rounded-md"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newPet.location}
          onChange={handleInputChange}
          className="w-full p-2 mb-2 rounded-md"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newPet.image}
          onChange={handleInputChange}
          className="w-full p-2 mb-2 rounded-md"
        />
        <div className="mt-4 space-x-2">
          <button
            onClick={addPet}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Add Pet
          </button>
          <button
            onClick={handleCancelClick}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </div>
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
    </div>
  );
}

export default PetGallery;
