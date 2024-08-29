import { cn, useScrollDir } from "@zenread/shared";
import { OverlayMenu } from "@zenread/ui";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const scrollDir = useScrollDir();
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        "fixed top-6 left-6 transition-transform ease-in-out",
        scrollDir === "down" && "-translate-y-[66px]",
      )}
    >
      <OverlayMenu
        paramsFn={() => navigate("/settings/main")}
        readListUrl="/readlist"
        opened
      />
    </div>
  );
};

export default Header;
