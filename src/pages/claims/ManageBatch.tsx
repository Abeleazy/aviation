import React from "react";
import useMenu from "../../hooks/useMenu";
const ManageBatch = () => {
  useMenu();
  return (
    <div className="crancy-adashboard">
      <div className="grid gap-4 bg-[#FFF] px-5 py-5 rounded-[8px] my-[2rem]">
        <div>
          <h4 className="text-[1.3rem] font-[600]">Manage Batch</h4>
        </div>
        <div className="grid gap-4">
          <div className="w-full flex">
            <div className="flex flex-1 flex-col last:ml-[3rem]">
              <p className="mb-2">Provider</p>
              <select name="provider" id="" className="px-3">
                <option value="Test">Testing</option>
              </select>
            </div>
            <div className="flex flex-1 flex-col last:ml-[3rem]">
              <p className="mb-2">Claim Month</p>
              <input type="date" name="" id="" className="px-3" />
            </div>
          </div>
          <div className="w-full flex">
            <div className="flex flex-1 flex-col last:ml-[3rem]">
              <p className="mb-2">Data Source</p>
              <select name="provider" id="" className="px-3">
                <option value="Test">Testing</option>
              </select>
            </div>
            <div className="flex flex-1 flex-col last:ml-[3rem]">
              <p className="mb-2">Total Billed</p>
              <input type="text" name="" id="" className="px-3" />
            </div>
          </div>
          <div className="w-full flex">
            <div className="flex flex-1 flex-col last:ml-[3rem]">
              <p className="mb-2">Total Count</p>
              <input type="text" name="" id="" className="px-3" />
            </div>
            <div className="flex flex-1 flex-col last:ml-[3rem]">
              <p className="mb-2">Received </p>
              <input type="date" name="" id="" className="px-3" />
            </div>
          </div>
          <div className="w-full flex">
            <div className="flex flex-1 flex-col">
              <p className="mb-2">Claim Type</p>
              <select name="provider" id="" className="px-3">
                <option value="Test">Testing</option>
              </select>
            </div>
          </div>

          <button className="bg-[#0A82FD] text-[#FFF] hover:bg-[#0A82FD50] border-none transition-all ease-in-out duration-300">
            Create Batch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageBatch;
