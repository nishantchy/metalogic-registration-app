import React from "react";
import Image from "next/image";
import hatImage from "../../public/images/hat.png";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const stepSize = 38; // Diameter of each step circle
  const padding = 10; // Padding around each step
  const stepRadius = stepSize / 2;
  const progress = (currentStep / totalSteps) * 100;
  const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);

  return (
    <div className="relative w-full flex items-center justify-between">
      {/* Background Progress Bar */}
      <div className="absolute w-full h-2 bg-gray-200 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-button rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Steps */}
      <div className="flex items-center justify-between w-full">
        {steps.map((step) => (
          <div
            key={step}
            className="flex flex-col items-center relative"
            style={{
              width: `${stepSize + padding * 2}px`,
              height: `${stepSize + padding * 2}px`,
              position: "relative", // Ensure relative positioning for children
            }}
          >
            <div
              className={`flex items-center justify-center rounded-full
              w-${stepSize}px h-${stepSize}px text-white font-semibold
              ${
                step < currentStep
                  ? "bg-button"
                  : step === currentStep
                  ? "bg-button"
                  : "bg-purple"
              }`}
              style={{
                width: `${stepSize}px`,
                height: `${stepSize}px`,
                borderRadius: "50%",
                padding: `${padding}px`,
              }}
            >
              {step}
            </div>

            {step === currentStep && (
              <Image
                src={hatImage}
                alt="Progress"
                width={54}
                height={54}
                className="absolute"
                style={{
                  left: `calc(${stepSize / 2}px )`,
                  top: "-25px",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
