import React from "react";

function SearchBar() {
  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
      <div className="flex space-x-4">
        <div className="w-1/3">
          <label htmlFor="petType" className="block text-gray-700">
            Pet Type:
          </label>
          <select
            id="petType"
            name="petType"
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="w-1/3">
          <label htmlFor="state" className="block text-gray-700">
            State:
          </label>
          <select
            id="state"
            name="state"
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="ny">New York</option>
            <option value="ca">California</option>
            <option value="tx">Texas</option>
          </select>
        </div>
        <div className="w-1/3">
          <label htmlFor="city" className="block text-gray-700">
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
