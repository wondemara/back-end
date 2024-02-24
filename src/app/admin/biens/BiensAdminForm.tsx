"use client";

import InputForm from "@/ui/design/form/Input";
import React from "react";

const BiensAdminForm = () => {
  return (
    <div className="max-w-screen-md mx-auto">
      <form>
        <div className="mb-6">
          <InputForm label="title" name="Title" />
        </div>
        <div className="mb-6">
          <InputForm label="description" name="description" type="textarea" />
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <InputForm label="surface" name="surface" />
          </div>
          <div>
            <InputForm label="rooms" name="Chambre" />
          </div>
          <div>
            <InputForm label="bedrooms" name="bedrooms" />
          </div>
          <div>
            <InputForm label="floors" name="floors" />
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div className="">
            <InputForm label="image" name="image" type="file" />
          </div>
          <div className=""></div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-3">
          <InputForm label="city" name="Ville" />

          <InputForm label="postal_code" name="Code Postal" />

          <InputForm label="country" name="Pays" />
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <InputForm label="price" name="Prix" />

          <InputForm label="address" name="Adresse" />
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input type="hidden" name="sold" value="0" />
            <input
              id="sold"
              type="checkbox"
              role="switch"
              value="1"
              name="sold"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="sold"
            className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
          >
            Loué ?.
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-primary dark:focus:ring-primary"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default BiensAdminForm;
