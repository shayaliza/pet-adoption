"use client";
import React, { useState } from "react";

function AddPetButton({ onAddPet }) {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPetInfo({ ...petInfo, [name]: value });
  };

  const handleAddPet = () => {
    onAddPet({ ...petInfo, id: Date.now() }); // Generate a unique ID
    setPetInfo({ name: "", gender: "", location: "", image: "" });
    setShowForm(false);
  };

  return (
    <div>
      {/* {showForm ? (
        <div className="bg-white p-4 rounded-md shadow-md">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={petInfo.name}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 rounded-md"
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={petInfo.gender}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 rounded-md"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={petInfo.location}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 rounded-md"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={petInfo.image}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 rounded-md"
          />
          <div className="mt-4 space-x-2">
            <button
              onClick={handleAddPet}
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
      ) : (
        <button
          onClick={handleAddClick}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Add Pet
        </button>
      )} */}
    </div>
  );
}

export default AddPetButton;
