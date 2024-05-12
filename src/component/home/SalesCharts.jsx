import React from "react";
import SaleHistory from "./SaleHistory";
import VisitorSource from "./VisitorSource";

function SalesCharts() {
  return (
    <div className="w-full grid gap-4 grid-cols-3">
      <SaleHistory />
      <VisitorSource />
    </div>
  );
}

export default SalesCharts;
