import React, { Component, useState } from "react";

interface Step {
  name: string;
  component: Component;
}
interface StepperProps {
  steps: any[];
}
const StepperContainer = ({ steps }: StepperProps) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleNext = () => {
    if (currentStep !== steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep !== 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  return (
    <div className="w-full bg-[#FFF]">
      <div className="flex flex-1 w-full">
        {steps.map((step, index) => (
          <div className="flex w-full items-center ">
            <div
              className={`flex flex-1 w-10 h-1 rounded-[5rem]  mr-2 ${
                currentStep >= index ? `bg-[#83F38F]` : `bg-[#F5F5F5]`
              }`}
            />
            <div
              className={`h-[2rem] w-[2rem] rounded-full flex items-center justify-center text-[1.1rem] font-[600] mr-4 ${
                currentStep > index
                  ? `bg-[#83F28F] text-[#FFF]`
                  : `bg-[#F5F5F5]`
              }`}
            >
              {currentStep > index ? (
                <i className="fa-solid fa-check"></i>
              ) : (
                <p>{index + 1}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="py-3">{steps[currentStep].component}</div>
      <div className="flex justify-end">
        <div className="flex">
          {currentStep > 0 && (
            <button
              onClick={handlePrevious}
              className="bg-[#F5F5F5] border-[transparent] flex w-32 items-center justify-center"
            >
              Previous
            </button>
          )}
          {currentStep !== steps.length - 1 && (
            <button
              onClick={handleNext}
              className="bg-primaryColor border[transparent] flex w-32 items-center justify-center"
            >
              Next
            </button>
          )}

          {currentStep === steps.length - 1 && (
            <button className="bg-primaryColor border[transparent] flex w-32 items-center justify-center">
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepperContainer;
