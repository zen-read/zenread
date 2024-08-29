import { SelectButton, SelectButtonParams } from "@zenread/ui";
import {
    CapitalLetter,
    ColorMatch,
    Info,
    Storage,
} from "@zenread/ui/icons/small/index.js";
import { Link } from "react-router-dom";

type CategoryLinks = {
  label: SelectButtonParams["label"];
  icon: SelectButtonParams["icon"];
  url: string;
};

const cats: CategoryLinks[] = [
  {
    label: "Font",
    icon: <CapitalLetter />,
    url: "/font",
  },
  {
    label: "Color scheme",
    icon: <ColorMatch />,
    url: "/color",
  },
  {
    label: "Storage",
    icon: <Storage />,
    url: "/storage",
  },
  {
    label: "About app",
    icon: <Info />,
    url: "/about",
  },
];

export const Categories = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      {cats.map((item, index) => (
        <Link key={index} to={"/settings" + item.url}>
          <SelectButton key={index} label={item.label} icon={item.icon} />
        </Link>
      ))}
    </div>
  );
};
