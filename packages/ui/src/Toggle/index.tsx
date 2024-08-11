import { cn } from "@zenread/shared";
import { useState } from "react";

interface ToggleProps {
  /** Is that toggle active? */
  active: boolean;
}

/** Toggle button */
export const Toggle = ({ active }: ToggleProps) => {
  const [isActive, setIsActive] = useState(active);
  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className={cn(
        "transition-color flex h-7 w-11 cursor-pointer items-center rounded-full duration-150 ease-in-out",
        isActive ? "bg-secondary" : "border border-secondary bg-primary",
      )}
    >
      <div
        className={cn(
          "h-[18px] w-[18px] rounded-full transition-all duration-150 ease-in-out",
          isActive ? "mr-2 translate-x-[27px] bg-primary" : "ml-2 bg-secondary",
        )}
      ></div>
    </div>
  );
};
