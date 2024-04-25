import React, { useState, useEffect } from "react";
import { useStore } from "../../utils/store/useStore";
import { useFormik } from "formik";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const AddContractModal = () => {
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //   const [selectedBank, setSelectedBank] = useState(null);
  const { addContractModal, openContract } = useStore();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phoneNumber: "",
      password: "Password1234",
      roleId: 0,
      percentage: "0",
      address: "",
      shareHolderFirstName: "",
      shareHolderLastName: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      console.log(values);
      const payload = {
        ...formik.values,
        percentage: formik.values.percentage.toString(),
      };
      console.log(payload);
      const { data } = await axios.post(`${baseUrl}/auth/create-user`, payload);

      if (data.success) {
        setIsLoading(false);
        console.log(data);
        console.log(values);
        addContractModal(false);
      } else {
        toast(data.message);
        setIsLoading(false);
        addContractModal(false);
      }
    },
  });

  const getRoles = async () => {
    const { data } = await axios.get(`${baseUrl}/auth/get-role`);

    if (data.success) {
      console.log(data.data);
      setRoles(data.data);
    }
  };
  const handleCloseModal = () => {
    addContractModal(!openContract);
    setSelectedBank(null);
  };

  useEffect(() => {
    getRoles();
  }, []);
  return (
    <div className="fixed w-screen h-screen bg-[#00000090] top-[0] z-[100000] flex items-center justify-center">
      <div className="bg-[#FFF] h-[80%] w-[60%] rounded-[5px]">
        <div className="flex flex-col w-full h-full rounded-[5px] px-[2rem]  divide-y">
          <div className="flex flex-none h-[5rem] items-center">
            <h3 className="text-[1.3rem] font-[700] ">Add Shareholder</h3>
          </div>
          <div className="py-3 flex-1 overflow-scroll overflow-x-hidden">
            <div className="mb-3">
              <div>
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="px-3"
                  required
                  onChange={formik.handleChange("name")}
                />
              </div>
            </div>
            <div className="mb-3 flex ">
              <div className="flex-1 mr-3">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="px-3"
                  required
                  onChange={formik.handleChange("email")}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+2348092314576"
                  className="px-3"
                  maxLength={11}
                  required
                  onChange={formik.handleChange("phoneNumber")}
                />
              </div>
            </div>
            <div className="mb-3 flex ">
              <div className="flex-1 mr-3">
                <label htmlFor="">Shareholder First Name</label>
                <input
                  type="text"
                  placeholder="Shareholder First Name"
                  className="px-3"
                  required
                  onChange={formik.handleChange("shareHolderFirstName")}
                />
              </div>
              <div className="flex-1 mr-3">
                <label htmlFor="">Shareholder Last Name</label>
                <input
                  type="text"
                  placeholder="Shareholder Last Name"
                  className="px-3"
                  required
                  onChange={formik.handleChange("shareHolderLastName")}
                />
              </div>
            </div>
            <div className="mb-3 flex ">
              <div className="flex-1 mr-3">
                <label htmlFor="">Address</label>
                <input
                  type="address"
                  className="px-3"
                  onChange={formik.handleChange("address")}
                />
              </div>
            </div>
            <div className="mb-3 flex ">
              <div className="flex-1 mr-3">
                <label htmlFor="">Role</label>
                <select
                  className="px-3"
                  onChange={formik.handleChange("roleId")}
                  required
                >
                  <option>--- Select Role ---</option>
                  {roles?.map((role) => (
                    <option value={role.id}>{role.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <div>
                  <label htmlFor="">Share Percent</label>
                  <p>{formik.values.percentage}%</p>
                </div>
                <input
                  type="range"
                  name="percentage"
                  min="0"
                  max="100"
                  defaultValue="0"
                  onChange={formik.handleChange("percentage")}
                  className="w-[350px] mt-[8px] rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between h-[5rem]">
            <button
              className="flex-none w-36 bg-[#F5F5F5] border-none rounded-[5px]"
              onClick={handleCloseModal}
            >
              Close
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-none w-36 bg-[#444] text-[#FFF] rounded-[5px]"
              onClick={formik.handleSubmit}
            >
              {isLoading ? "Loading" : <span>Add Beneficiary</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContractModal;
