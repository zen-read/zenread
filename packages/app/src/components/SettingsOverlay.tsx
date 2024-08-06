import type { SelectButtonParams } from "@zenread/ui";
import { Button, SelectButton } from "@zenread/ui";
import { Left } from "@zenread/ui/icons/mid/index.js";
import {
  Accessibility,
  CapitalLetter,
  ColorMatch,
  Info,
  Storage,
} from "@zenread/ui/icons/small/index.js";
import { useSettingsToggleStore } from "../store/useSettingsToggleStore.js";

const settingsCats: SelectButtonParams[] = [
  {
    label: "Font",
    icon: <CapitalLetter />,
    onClick: () => {},
  },
  {
    label: "Color scheme",
    icon: <ColorMatch />,
    onClick: () => {},
  },
  {
    label: "Accessbility",
    icon: <Accessibility />,
    onClick: () => {},
  },
  {
    label: "Storage",
    icon: <Storage />,
    onClick: () => {},
  },
  {
    label: "About app",
    icon: <Info />,
    onClick: () => {},
  },
];

const SettingsOverlay = () => {
  const { toggleSettings } = useSettingsToggleStore((state) => state);

  return (
    <div className="z-50 fixed w-screen h-screen bg-black-25% flex items-center justify-center">
      <div className="w-[1024px] h-[720px] bg-primary rounded-md grid grid-cols-[1fr_3fr] border border-secondary-25%">
        <div className="border-r border-secondary-25%">
          <div className="w-full border-b border-secondary-25% px-4 py-5 flex items-center gap-4">
            <Button
              size="small"
              type="transparent"
              icon={<Left />}
              onClick={toggleSettings}
            />
            <span className="font-heading-6">Settings</span>
          </div>
          <div className="p-4 flex flex-col gap-4">
            {settingsCats.map((item, index) => (
              <SelectButton
                key={index}
                label={item.label}
                icon={item.icon}
                onClick={item.onClick}
              />
            ))}
          </div>
        </div>
        <div>Settings</div>
      </div>
    </div>
  );
};

export default SettingsOverlay;
