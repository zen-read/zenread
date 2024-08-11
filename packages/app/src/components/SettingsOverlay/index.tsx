import {
  ControlUnit,
  DropdownMenu,
  Slider,
  Toggle,
  type SelectButtonParams,
} from "@zenread/ui";
import {
  Accessibility,
  CapitalLetter,
  ColorMatch,
  Info,
  Storage,
} from "@zenread/ui/icons/small/index.js";
import { useState } from "react";
import settingsContent, {
  ControlType,
} from "../../components/settingsContent.js";
// import { useSettingsStore } from "../../store/useSettingsStore.js";
import { Categories } from "./Categories.js";
import { Heading } from "./Heading.js";

const settingsCats: SelectButtonParams[] = [
  {
    label: "Font",
    icon: <CapitalLetter />,
  },
  {
    label: "Color scheme",
    icon: <ColorMatch />,
  },
  {
    label: "Accessbility",
    icon: <Accessibility />,
  },
  {
    label: "Storage",
    icon: <Storage />,
  },
  {
    label: "About app",
    icon: <Info />,
  },
];

const SettingsOverlay = () => {
  // const { settings } = useSettingsStore((state) => state);
  const [page, setPage] = useState(settingsCats[0].label);
  const [pageContent, setPageContent] = useState(settingsContent[0]);

  const switchControl = (controlType: ControlType): JSX.Element => {
    switch (controlType) {
      case "slider":
        return <Slider />;
      case "toggle":
        return <Toggle />;
      case "select":
        return <DropdownMenu />;
    }
  };

  return (
    <div className="z-50 fixed w-screen h-screen bg-black-25% flex items-center justify-center">
      <div className="w-[1024px] h-[720px] bg-primary rounded-md grid grid-cols-[1fr_3fr] border border-secondary-25%">
        <div className="border-r border-secondary-25%">
          <Heading />
          <Categories cats={settingsCats} page={page} setPage={setPage} />
        </div>
        <div className="flex flex-col w-full h-full p-6">
          {pageContent.group.map((item, index) => (
            <div key={index}>
              <h6 className="font-heading-6 block w-full border-b border-secondary-25% pb-4">
                {item.title}
              </h6>
              <div className="flex flex-col gap-4 mt-4">
                {item.controls.map((control, index) => (
                  <ControlUnit
                    key={index}
                    label={control.title}
                    description={control.desc}
                    control={switchControl(control.control)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsOverlay;
