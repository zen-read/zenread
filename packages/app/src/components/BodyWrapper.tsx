import { cn } from "@zenread/shared";
import Header from "../components/Header.js";

interface BodyWrapperProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

const BodyWrapper = ({ children, fullWidth, className }: BodyWrapperProps) => {
  return (
    <div className={cn("w-full", !fullWidth && "flex justify-center")}>
      <Header />
      <div className={cn("mt-[80px]", !fullWidth && "w-[1025px]", className)}>
        {children}
      </div>
    </div>
  );
};

BodyWrapper.defaultProps = {
  fullWidth: true,
};

export default BodyWrapper;
