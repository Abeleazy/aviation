import React from "react";

function InnerWrapper({ children }) {
  return (
    <div className="w-full mb-5">
      <div className="">
        <div className=" w-full">{children}</div>
      </div>
    </div>
  );
}

export default InnerWrapper;
