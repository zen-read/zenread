import { cn } from "@zenread/shared";
import Header from "../components/Header.js";
import { useSettingsToggleStore } from "../store/useSettingsToggleStore.js";
import SettingsOverlay from "./SettingsOverlay.js";

interface BodyWrapperProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

const BodyWrapper = ({ children, fullWidth, className }: BodyWrapperProps) => {
  const { isSettingsOpen } = useSettingsToggleStore((state) => state);
  return (
    <div className={cn("w-full", !fullWidth && "flex justify-center")}>
      {isSettingsOpen && <SettingsOverlay />}
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
