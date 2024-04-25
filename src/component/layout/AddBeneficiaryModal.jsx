import React, { useState, useEffect } from "react";
import { useStore } from "../../utils/store/useStore";
import { useFormik } from "formik";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const AddBeneficiaryModal = () => {
  const [banks, setBanks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);
  const { addBeneficiaryModal, openBeneficiary } = useStore();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      shareHolderIdentity: id,
      beneficiaryEmail: "",
      beneficiaryName: "",
      beneficiaryAccount: "",
      bankCode: "",
      percentageShare: 0,
      phoneNumber: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      const { data } = await axios.post(
        `${baseUrl}/Shareholder/create-beneficiary`,
        values
      );

      if (data.success) {
        setIsLoading(false);
        console.log(data);
        console.log(values);
        addBeneficiaryModal(!openBeneficiary);
      } else {
        toast(data.message);
        setIsLoading(false);
        addBeneficiaryModal(!openBeneficiary);
      }
    },
  });

  const getBanks = async () => {
    const { data } = await axios.post(`${baseUrl}/auth/getCountryBanks`, {
      countryCode: "NG",
    });

    if (data.success) {
      console.log(data.data);
      setBanks(data.data);
    }
  };
  const handleCloseModal = () => {
    addBeneficiaryModal(!openBeneficiary);
    setSelectedBank(null);
  };

  useEffect(() => {
    getBanks();
  }, [openBeneficiary]);
  return (
    <div className="fixed w-screen h-screen bg-[#00000090] top-[0] z-[100000] flex items-center justify-center">
      <div className="bg-[#FFF] h-[80%] w-[60%] rounded-[5px]">
        <div className="w-full h-full rounded-[5px] px-[2rem]  divide-y">
          <div className="py-4">
            <h3 className="text-[1.3rem] font-[700] ">Add Beneficiary</h3>
          </div>
          <div className="py-3">
            <div className="mb-3">
              <div>
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="px-3"
                  required
                  onChange={formik.handleChange("beneficiaryName")}
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
                  onChange={formik.handleChange("beneficiaryEmail")}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+2348092314576"
                  className="px-3"
                  required
                  onChange={formik.handleChange("phoneNumber")}
                />
              </div>
            </div>
            <div className="mb-3 flex ">
              <div className="flex-1 mr-3">
                <label htmlFor="">Banks</label>
                <select
                  className="px-3"
                  onChange={formik.handleChange("bankCode")}
                  required
                >
                  <option>--- Select Bank ---</option>
                  {banks?.map((bank) => (
                    <option value={bank.code}>{bank.name}</option>
                  ))}
                </select>
              </div>
              {formik.values.bankCode !== "" && (
                <div className="flex-1">
                  <label htmlFor="">Account Number</label>
                  <input
                    type="text"
                    placeholder="Account Number"
                    className="px-3"
                    required
                    onChange={formik.handleChange("beneficiaryAccount")}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between py-4">
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

export default AddBeneficiaryModal;
