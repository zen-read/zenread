import { cn, useScrollDir } from "@zenread/shared";
import { OverlayMenu } from "@zenread/ui";
import { useSettingsToggleStore } from "../store/useSettingsToggleStore.js";

const Header = () => {
  const scrollDir = useScrollDir();
  const { toggleSettings } = useSettingsToggleStore((state) => state);

  return (
    <div
      className={cn(
        "fixed top-6 left-6 transition-transform ease-in-out",
        scrollDir === "down" && "-translate-y-[66px]",
      )}
    >
      <OverlayMenu paramsFn={toggleSettings} readListUrl="/readlist" opened />
    </div>
  );
};

export default Header;
