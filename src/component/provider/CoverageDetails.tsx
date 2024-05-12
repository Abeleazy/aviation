import React from "react";

const CoverageDetails = () => {
  return (
    <div className="w-full">
      <div className="w-full flex mb-3 items-center">
        <h3 className="text-[1.2rem] font-[400] mr-4">Coverage Details</h3>
        <div className="flex flex-1 h-1 bg-[#F5F5F5]" />
      </div>
      <div className="w-ful grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label htmlFor="">Coverage Type</label>
            <select name="" id="" className="px-4 rounded-[5px] h-[50px] py-0">
              <option value="">---Select Bank---</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="lastname">Effective Date</label>
            <input
              type="date"
              name="effectiveDate"
              id="effectiveDate"
              className="px-4 rounded-[5px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label htmlFor="">Termination Date</label>
            <input
              type="date"
              name="terminationDate"
              id=""
              className="px-4 rounded-[5px]"
            />
          </div>
          <div className="">
            <input
              type="checkbox"
              name="lastname"
              id="lastname"
              className="px-4 rounded-[5px] mr-3"
            />
            <label htmlFor="lastname">Check if current</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageDetails;
