import { Button } from "@zenread/ui";
import { Left } from "@zenread/ui/icons/mid/index.js";
import { useNavigate } from "react-router-dom";

export const Heading = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full border-b border-secondary-25% px-4 py-4 flex items-center gap-4">
      <Button
        size="small"
        type="transparent"
        icon={<Left />}
        onClick={() => navigate("/")}
      />
      <span className="font-heading-6">Settings</span>
    </div>
  );
};
