import React from "react";

type Props = {};

const SearchSection = (props: Props) => {
  return (
    <div className="m-4 lg:m-0">
      <div className="p-8 bg-white lg:flex lg:items-center lg:justify-center">
        <form className="space-y-4 lg:space-y-0 lg:flex lg:space-x-4 lg:flex-nowrap">
          <div className="">
            <select
              name="search"
              title="search"
              className="w-full py-2.5 px-8 bg-white border border-gray-400 rounded outline-none focus:ring-2"
            >
              <option>Type</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Villa</option>
              <option>Hotel</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              className="w-full p-2 border border-gray-400 rounded outline-none focus:ring-2"
              placeholder="Location"
            />
          </div>
          <div>
            <input
              type="number"
              className="w-full p-2 border border-gray-400 rounded outline-none focus:ring-2"
              placeholder="min"
            />
          </div>
          <div>
            <input
              type="number"
              className="w-full p-2 border border-gray-400 rounded outline-none focus:ring-2"
              placeholder="max"
            />
          </div>
          <div>
            <button className="px-8 py-2 text-blue-100 bg-gray-600 rounded">
              Recherche
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchSection;
