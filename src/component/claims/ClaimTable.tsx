import React from "react";

const ClaimTable = ({ tableHead, products }) => {
  return (
    <table className="w-full text-sm overflow-x-auto text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {Object.keys(tableHead).map((item, key) =>
            tableHead[item] === "checkbox" ? (
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for-html="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
            ) : (
              <th scope="col" className="px-3 py-3 min-w-30 ">
                {tableHead[item]}
              </th>
            )
          )}
          {/* <th scope="col" className="px-6 py-3">
            Action
          </th> */}
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr
            key={product.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded-sm  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for-html="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th scope="row" className="px-6 py-4">
              {product.name}
            </th>
            <td className="px-6 py-4">{product.color}</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClaimTable;
