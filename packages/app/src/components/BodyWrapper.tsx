import { cn } from "@zenread/shared";
import { useEffect, useReducer } from "react";
import Header from "../components/Header.js";
import { settingsOpenedStore } from "../store.js";
import SettingsOverlay from "./SettingsOverlay.js";

interface BodyWrapperProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

const BodyWrapper = ({ children, fullWidth, className }: BodyWrapperProps) => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    const unsubscribe = settingsOpenedStore.subscribe(() => {
      forceUpdate();
    });

    return unsubscribe;
  }, []);

  return (
    <div className={cn("w-full", !fullWidth && "flex justify-center")}>
      {settingsOpenedStore.getState().opened && <SettingsOverlay />}
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
