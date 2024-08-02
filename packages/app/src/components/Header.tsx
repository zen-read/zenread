import { OverlayMenu } from "@zenread/ui";

const Header = () => {
  return (
    <div className="fixed top-6 left-6">
      <OverlayMenu opened />
    </div>
  );
};

export default Header;
