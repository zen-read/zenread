import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSettingsStore } from "../../store/useSettingsStore.js";
import settingsContent from "../settingsContent.js";
import { AboutContent } from "./AboutContent.js";
import { Control } from "./Controll.js";

interface ContentProps {
  link: string;
}

export const Content = ({ link }: ContentProps) => {
  const { settings } = useSettingsStore((state) => state);
  const content = settingsContent.find((item) => item.url === link);

  const location = useLocation();

  useEffect(() => {
    return;
  }, [link, settings]);

  return content ? (
    <div key={link}>
      {content.group.map((item, index) => (
        <div key={index}>
          <h6 className="font-heading-6 block w-full border-b border-secondary-25% pb-4">
            {item.title}
          </h6>
          <div className="flex flex-col gap-4 mt-4">
            {item.controls.map((control) => (
              <Control
                selectItems={control.selectItems as string[]}
                key={control.configName}
                label={control.title}
                description={control.desc}
                configValue={settings[control.configName]}
                controlType={control.control}
                buttonLabel={control.buttonLabel as string}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="w-full h-full flex items-center justify-center">
      {location.pathname === "/settings/about" ? (
        <AboutContent />
      ) : (
        <span className="text-secondary-25% font-text">
          Select a setting you want to edit
        </span>
      )}
    </div>
  );
};
