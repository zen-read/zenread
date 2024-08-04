import { formatDate, TextBlockType } from "@zenread/shared";
import { Button, OriginLogo, TextBlock } from "@zenread/ui";
import BodyWrapper from "../components/BodyWrapper.js";
import PostPanel from "../components/PostPanel.js";
import { Heart, HeartOutline, Origin } from "@zenread/ui/icons/mid/index.js";

const templateData: TemplateDataType = {
  cover: "https://i1.sndcdn.com/artworks-oGvaMt0dsBWPL7WZ-qgbAMA-t500x500.jpg",
  originName: "Maxwell.com",
  originLogo:
    "https://m.media-amazon.com/images/I/31+8EYj8ZdL._UXNaN_FMjpg_QL85_.jpg",
  dateOfPublish: new Date(),
  title: "Title",
  saved: false,
  content: [
    {
      type: "h1",
      content: "gdsgsdjngnlsjngk;ldsngonsd",
    },
    {
      type: "h2",
      content: "gdsgsdjngnlsjngk;ldsngonsd",
    },
    {
      type: "h3",
      content: "gdsgsdjngnlsjngk;ldsngonsd",
    },
    {
      type: "h4",
      content: "gdsgsdjngnlsjngk;ldsngonsd",
    },
    {
      type: "h5",
      content: "gdsgsdjngnlsjngk;ldsngonsd",
    },
    {
      type: "h6",
      content: "gdsgsdjngnlsjngk;ldsngonsd",
    },
    {
      type: "p",
      content: "gdsgsdjngnlsjngk;ldsngonsd",
    },
  ],
};

interface TemplateDataType {
  cover: string;
  originName: string;
  originLogo: string;
  dateOfPublish: Date;
  saved: boolean;
  title: string;
  content: ContentType[];
}

type ContentType = {
  type: TextBlockType["type"];
  content: string;
};

const PostPage = () => {
  return (
    <>
      <BodyWrapper fullWidth={false}>
        <PostPanel isSavedPost={templateData.saved} />
        <img
          className="w-full h-[400px] rounded-lg object-cover"
          src={templateData.cover}
          alt=""
        />
        <div className="flex justify-between mt-6">
          <div className="flex gap-4 items-center">
            <OriginLogo
              link="/origin"
              label={templateData.originName}
              imageUrl={templateData.originLogo}
              size="L"
              border
              loaded
            />
            <div className="w-3 h-3 bg-secondary rounded-full"></div>
            <span className="font-date">
              {formatDate(templateData.dateOfPublish)}
            </span>
          </div>
          <div className="flex gap-3">
            <Button
              icon={<Origin className="filterColor-secondary" />}
              type="transparent"
              size="small"
            />
            <Button
              icon={
                templateData.saved ? (
                  <Heart className="filterColor-secondary" />
                ) : (
                  <HeartOutline className="filterColor-secondary" />
                )
              }
              type="transparent"
              size="small"
            />
          </div>
        </div>
        <h1 className="mt-5 font-bold text-[40px]">{templateData.title}</h1>
        <div className="w-full flex justify-center mt-10">
          <div className="w-[700px]">
            {templateData.content.map((item, index) => (
              <TextBlock key={index} type={item.type} loaded>
                {item.content}
              </TextBlock>
            ))}
          </div>
        </div>
      </BodyWrapper>
    </>
  );
};

export default PostPage;
