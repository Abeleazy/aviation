import React from "react";
import Countries from "../cards/Countries";
import TopSeller from "../cards/TopSeller";
import CalenderSm from "../cards/CalenderSm";

function Sidebar() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full">
        <div className="flex w-full h-full">
          <Countries />
          <CalenderSm />
          {/* <TopSeller /> */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
