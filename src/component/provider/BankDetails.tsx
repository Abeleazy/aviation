import React from "react";

const BankDetails = () => {
  return (
    <div className="w-full">
      <div className="w-full flex mb-3 items-center">
        <h3 className="text-[1.2rem] font-[400] mr-4">Bank Details</h3>
        <div className="flex flex-1 h-1 bg-[#F5F5F5]" />
      </div>
      <div className="w-ful grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label htmlFor="">Bank</label>
            <select name="" id="" className="px-4 rounded-[5px] h-[50px] py-0">
              <option value="">---Select Bank---</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="lastname">Bank Branch</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="px-4 rounded-[5px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label htmlFor="">Account Name</label>
            <input
              type="First Name"
              name=""
              id=""
              className="px-4 rounded-[5px]"
            />
          </div>
          <div className="">
            <label htmlFor="lastname">Account Number</label>
            <input
              type="Last Name"
              name="lastname"
              id="lastname"
              className="px-4 rounded-[5px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full">
            <label htmlFor="phoneNumber">Comments</label>
            <textarea
              name="comments"
              id="comments"
              className="px-4 py-2 rounded-[5px]"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
