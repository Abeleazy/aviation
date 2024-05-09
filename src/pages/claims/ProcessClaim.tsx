import React, { useState } from "react";
import useMenu from "../../hooks/useMenu";
import ClaimDropdown from "../../component/claims/ClaimDropdown";
import ClaimTable from "../../component/claims/ClaimTable";
const ProcessClaims = () => {
  useMenu();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState("last30days");
  const filters = [
    { label: "Last day", value: "lastday" },
    { label: "Last 7 days", value: "last7days" },
    { label: "Last 30 days", value: "last30days" },
    { label: "Last month", value: "lastmonth" },
    { label: "Last year", value: "lastyear" },
  ];

  const tableHead = [
    "checkbox",
    "S/N",
    "PA Name",
    "Enrollee Number",
    "EDF",
    "EDT",
    "Proc. Code",
    "Proc. Desc",
    "Charge",
    "Units",
    "Diag. Code",
    "Diag. Desc",
    "Actions",
  ];
  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    setIsActive(!isActive);
    // Perform actions based on the selected filter value
  };

  const products = [
    // {
    //   id: 1,
    //   name: "Apple MacBook Pro 17",
    //   color: "Silver",
    //   category: "Laptop",
    //   price: "$2999",
    // },
    // Add more products as needed
  ];
  return (
    <div className="crancy-adashboard">
      <div className="w-full bg-[#FFF] px-4 py-2 mt-2 h-[50rem] md:max-h-[20rem]">
        <div>
          <h3 className="font-[500]">Batch(s) Awaiting Approval</h3>
        </div>

        <div className="relative w-full h-full  sm:rounded-lg grid gap-3">
          <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
            <ClaimDropdown
              id="dropdownRadioButton"
              label={`Last ${
                selectedFilter === "last30days" ? "30 days" : selectedFilter
              }`}
              options={filters}
              onChange={handleFilterChange}
              isActive={isActive}
              setIsActive={setIsActive}
            />
            {/* Other UI elements */}
          </div>
          <div className="flex w-full h-fit overflow-x-auto">
            <ClaimTable tableHead={tableHead} products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessClaims;
