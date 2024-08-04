import { OverlayMenu } from "@zenread/ui";
import { cn, useScrollDir } from "@zenread/shared";

const Header = () => {
  const scrollDir = useScrollDir();

  return (
    <div
      className={cn(
        "fixed top-6 left-6 transition-transform ease-in-out",
        scrollDir === "down" && "-translate-y-[66px]",
      )}
    >
      <OverlayMenu readListUrl="/readlist" opened />
    </div>
  );
};

export default Header;
