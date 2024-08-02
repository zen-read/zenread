import { formatDate } from "@zenread/shared";
import { Button, OriginLogo } from "@zenread/ui";
import BodyWrapper from "../components/BodyWrapper.js";

const templateData = {
  cover: "https://i1.sndcdn.com/artworks-oGvaMt0dsBWPL7WZ-qgbAMA-t500x500.jpg",
  originName: "Maxwell.com",
  originLogo:
    "https://m.media-amazon.com/images/I/31+8EYj8ZdL._UXNaN_FMjpg_QL85_.jpg",
  dateOfPublish: new Date(),
  title: "Title",
  content: [
    {
      type: "h1",
      content: "gdsgsdjngnlsjngk;ldsngonsd",
    },
  ],
};

const PostPage = () => {
  return (
    <BodyWrapper fullWidth={false}>
      <img
        className="w-full h-[400px] rounded-lg object-cover"
        src={templateData.cover}
        alt=""
      />
      <div className="flex justify-between mt-6">
        <div className="flex gap-4 items-center">
          <OriginLogo
            label={templateData.originName}
            imageUrl={templateData.originLogo}
            size="L"
            border
            loaded
          />
          <div className="w-3 h-3 bg-black rounded-full"></div>
          <span className="font-normal text-xs leading-none">
            {formatDate(templateData.dateOfPublish)}
          </span>
        </div>
        <div className="flex gap-3">
          <Button label="Share" type="transparent" size="small" />
        </div>
      </div>
      <h1 className="mt-5 font-bold text-[40px]">{templateData.title}</h1>
      <div className="w-full flex justify-center mt-10">
        <div className="w-[500px]">Content</div>
      </div>
    </BodyWrapper>
  );
};

export default PostPage;
