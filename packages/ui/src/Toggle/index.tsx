import { cn } from "@zenread/shared";
import { forwardRef, useState } from "react";

interface ToggleProps {
  /** Is that toggle active? */
  active: boolean;
}

/** Toggle button */
export const Toggle = forwardRef(({ active }: ToggleProps) => {
  const [isActive, setIsActive] = useState(active);
  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className={cn(
        "transition-color flex h-7 w-11 cursor-pointer items-center rounded-full duration-150 ease-in-out",
        isActive ? "bg-black" : "border border-black bg-white",
      )}
    >
      <div
        className={cn(
          "h-[18px] w-[18px] rounded-full transition-all duration-150 ease-in-out",
          isActive ? "mr-2 translate-x-[27px] bg-white" : "ml-2 bg-black",
        )}
      ></div>
    </div>
  );
});

Toggle.displayName = "Toggle";
