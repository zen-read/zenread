import { useParams } from "react-router-dom";
import { Categories } from "./Categories.js";
import { Content } from "./Content.js";
import { Heading } from "./Heading.js";

const SettingsOverlay = () => {
  const { id } = useParams();

  return (
    <div className="z-50 fixed w-screen h-screen bg-black-25% flex items-center justify-center">
      <div className="lg:w-[1024px] w-full hmd:h-[768px] h-full p-6 flex items-center justify-center">
        <div className="w-full h-full bg-primary rounded-md grid grid-cols-[1fr_3fr] border border-secondary-25%">
          <div className="border-r border-secondary-25%">
            <Heading />
            <Categories />
          </div>
          <div className="flex flex-col w-full h-full p-6">
            {id && <Content link={id} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsOverlay;
