import { Button, ControlUnit, DropdownMenu, Input } from "@zenread/ui";
import { useRef, useState } from "react";

interface ControlProps {
  label: string;
  description: string;
  controlType: string;
  configValue: string | boolean | number;
  selectItems: string[];
  buttonLabel: string;
}

export const Control = ({
  label,
  description,
  controlType,
  selectItems,
  configValue,
  buttonLabel,
}: ControlProps) => {
  const [value, setValue] = useState(configValue);
  const ref = useRef({ getValue: () => value as string });
  return (
    <ControlUnit
      label={label}
      description={description}
      control={
        <label
          htmlFor="searchInput"
          className="inline-flex items-center justify-start gap-4 rounded-md text-secondary relative border border-secondary-25% hover:border-secondary focus-within:border-secondary"
        >
          {controlType === "input" && (
            <Input ref={ref} type="outline" value={value as string} />
          )}
          {controlType === "select" && (
            <DropdownMenu selectedItem={value as string} items={selectItems} />
          )}
          {controlType === "button" && (
            <Button
              label={buttonLabel}
              size="default"
              onClick={() => {}}
              type="outline"
            />
          )}
        </label>
      }
    />
  );
};
