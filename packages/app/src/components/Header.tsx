import { cn, useScrollDir } from "@zenread/shared";
import { OverlayMenu } from "@zenread/ui";

const Header = () => {
  const scrollDir = useScrollDir();

  return (
    <div
      className={cn(
        "fixed top-6 left-6 transition-transform ease-in-out",
        scrollDir === "down" && "-translate-y-[66px]",
      )}
    >
      <OverlayMenu paramsFn={() => {}} readListUrl="/readlist" opened />
    </div>
  );
};

export default Header;
