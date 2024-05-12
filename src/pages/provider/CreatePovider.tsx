import React, { Component } from "react";
import StepperContainer from "../../component/Stepper/StepperContainer";
import SetupProvider from "../../component/provider/SetupProvider";
import ContactPerson from "../../component/provider/ContactPerson";
import BankDetails from "../../component/provider/BankDetails";
import CoverageDetails from "../../component/provider/CoverageDetails";
const CreateProvider = () => {
  const steps = [
    {
      name: "Setup",
      component: <SetupProvider />,
    },
    {
      name: "Contact Person",
      component: <ContactPerson />,
    },
    {
      name: "Bank Details",
      component: <BankDetails />,
    },
    {
      name: "Coverage Information",
      component: <CoverageDetails />,
    },
  ];

  return (
    <div className="crancy-adashboard px-[3rem] py-3">
      <div className="w-full bg-[#FFF] px-5 py-4">
        <div>
          <h1 className="text-[1.4rem] font-[500]">Create Provider</h1>
        </div>
        <StepperContainer steps={steps} />
      </div>
    </div>
  );
};

export default CreateProvider;
