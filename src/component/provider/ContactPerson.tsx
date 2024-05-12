import React from "react";

const ContactPerson = () => {
  return (
    <div className="w-full">
      <div className="w-full flex mb-3 items-center">
        <h3 className="text-[1.2rem] font-[400] mr-4">Contact Person</h3>
        <div className="flex flex-1 h-1 bg-[#F5F5F5]" />
      </div>
      <div className="w-ful grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label htmlFor="">First Name</label>
            <input
              type="First Name"
              name=""
              id=""
              className="px-4 rounded-[5px]"
            />
          </div>
          <div className="">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="Last Name"
              name="lastname"
              id="lastname"
              className="px-4 rounded-[5px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="Phone Numebr"
              name="phoneNumber"
              id="phoneNumber"
              className="px-4 rounded-[5px]"
            />
          </div>
          <div className="">
            <label htmlFor="email">Email</label>
            <input
              type="Email"
              name="email"
              id="email"
              className="px-4 rounded-[5px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPerson;
