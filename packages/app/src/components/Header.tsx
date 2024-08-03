import { OverlayMenu } from "@zenread/ui";

const Header = () => {
  return (
    <div className="fixed top-6 left-6">
      <OverlayMenu readListUrl="/readlist" opened />
    </div>
  );
};

export default Header;
