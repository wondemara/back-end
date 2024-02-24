import React from "react";

const AdminBiensPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-20 ">
      <table className="w-full text-sm text-left  rtl:text-right">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              title
            </th>
            <th scope="col" className="px-6 py-3">
              Surface
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Bailleur
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b odd:bg-white odd:dark:bg-gray-100 even:bg-gray-50 even:dark:bg-gray-200">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
              <span> ✔️</span>
              Maison meublee a fes
            </th>
            <td className="px-6 py-4">20 m2</td>
            <td className="px-6 py-4">100000 $</td>
            <td className="px-6 py-4">fes lot chems</td>
            <td className="px-6 py-4">BailleurName</td>
            <td className="px-6 py-4">
              <a
                href="{{ route('admin.property.edit', ['property' => $property->id]) }}"
                className="font-medium text-blue-600 hover:underline"
              >
                Edit
              </a>

              <form
                action="{{ route('admin.property.destroy', $property) }}"
                method="POST"
              >
                <button className="font-medium text-red-600 hover:underline">
                  Delete
                </button>
              </form>
            </td>
          </tr>
          <tr className="border-b odd:bg-white odd:dark:bg-gray-100 even:bg-gray-50 even:dark:bg-gray-200">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
              <span> ✔️</span>
              Maison meublee a fes
            </th>
            <td className="px-6 py-4">20 m2</td>
            <td className="px-6 py-4">100000 $</td>
            <td className="px-6 py-4">fes lot chems</td>
            <td className="px-6 py-4">BailleurName</td>
            <td className="px-6 py-4">
              <a
                href="{{ route('admin.property.edit', ['property' => $property->id]) }}"
                className="font-medium text-blue-600 hover:underline"
              >
                Edit
              </a>

              <form
                action="{{ route('admin.property.destroy', $property) }}"
                method="POST"
              >
                <button className="font-medium text-red-600 hover:underline">
                  Delete
                </button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminBiensPage;
