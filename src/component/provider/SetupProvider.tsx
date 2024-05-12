import React from "react";
const SetupProvider = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="flex items-center justify-center mb-3">
          <h3 className="text-[1.2rem] font-[600]">Setup</h3>
        </div>
        <div className="w-ful grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <label htmlFor="">Name</label>
              <input type="name" name="" id="" className="px-4 rounded-[5px]" />
            </div>
            <div className="">
              <label htmlFor="">Category</label>
              <select
                name=""
                id=""
                className="px-4 rounded-[5px] h-[50px] py-0"
              >
                <option value="">---Select Category---</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <label htmlFor="">Phone Number</label>
              <input type="tel" name="" id="" className="px-4 rounded-[5px]" />
            </div>
            <div className="">
              <label htmlFor="">Phone Number 2</label>
              <input type="tel" name="" id="" className="px-4 rounded-[5px]" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name=""
                id=""
                className="px-4 rounded-[5px]"
              />
            </div>
            <div className="">
              <label htmlFor="">Email 2</label>
              <input
                type="email"
                name=""
                id=""
                className="px-4 rounded-[5px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <label htmlFor="">Address</label>
              <input
                type="address"
                name=""
                id=""
                className="px-4 rounded-[5px]"
              />
            </div>
            <div className="">
              <label htmlFor="">Address 2</label>
              <input
                type="address"
                name=""
                id=""
                className="px-4 rounded-[5px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <label htmlFor="">Country</label>
              <select
                name=""
                id=""
                className="px-4 rounded-[5px] h-[50px] py-0"
              >
                <option value="">---Select Country---</option>
              </select>
            </div>
            <div className="">
              <label htmlFor="">State</label>
              <select
                name=""
                id=""
                className="px-4 rounded-[5px] h-[50px] py-0"
              >
                <option value="">---Select State---</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <label htmlFor="">LGA</label>
              <select
                name=""
                id=""
                className="px-4 rounded-[5px] h-[50px] py-0"
              >
                <option value="">---Select LGA---</option>
              </select>
            </div>
            <div className="">
              <label htmlFor="">Postal Code</label>
              <input
                type="postal"
                name=""
                id=""
                className="px-4 rounded-[5px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="" htmlFor="file_input">
                Upload file
              </label>
              <input
                className="flex items-center w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                id="file_input"
                type="file"
              />
            </div>
            <div className="grid grid-cols-2">
              <div className="flex items-center">
                <input type="checkbox" name="" id="" />
                <p>Is Capitated</p>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="" id="" />
                <p>Is Capitated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupProvider;
