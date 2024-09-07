import ProgressBar from "./ProgressBar";
import Image from "next/image";
import bgImage from "../../public/images/background.png";
import logo from "../../public/images/logo.png";

interface LayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="w-full bg-gray-100 relative overflow-hidden min-h-[calc(100vh+300px)]">
      <div
        className="absolute inset-0 z-0"
        style={{ top: "80px", left: "-30px" }}
      >
        <Image
          src={bgImage}
          alt="bg-image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="relative z-10 left-5 top-1">
        <Image src={logo} alt="logo" width={104} height={78} />
      </div>
      <div className="text-title text-center font-semibold mb-[20px] relative z-10 ">
        Register
      </div>{" "}
      <div className="max-w-[900px] h-auto mx-auto px-4 relative z-10 mt-6">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        <div className="max-w-[890px] bg-white rounded-[10px] border-[1px] border-placeInput px-8 py-4  opacity-[95%] mt-[86px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
