import { formatDate, PostDataType } from "@zenread/shared/src";
import { Button, OriginLogo, TextBlock } from "@zenread/ui";
import { Heart, HeartOutline, Origin } from "@zenread/ui/icons/mid/index.js";
import { useEffect, useState } from "react";
import BodyWrapper from "../components/BodyWrapper.js";
import PostPanel from "../components/PostPanel.js";
import { usePostStore } from "../store/usePostStore.js";
import { initPostStore } from "../utils/initPostStore.js";

const templateData: PostDataType = {
  cover: "https://i1.sndcdn.com/artworks-oGvaMt0dsBWPL7WZ-qgbAMA-t500x500.jpg",
  origin_name: "Maxwell.com",
  origin_logo:
    "https://m.media-amazon.com/images/I/31+8EYj8ZdL._UXNaN_FMjpg_QL85_.jpg",
  date_of_publish: new Date(),
  title: "Title",
  content: [
    {
      type_: "H1",
      content: "gdsgsdjngnlsjngk;ldsngonsd",
    },
    {
      type_: "H2",
      content: "gdsgsdjngnlsjngk;ldsngonsd",
    },
    {
      type_: "H3",
      content: "gdsgsdjngnlsjngk;ldsngonsd",
    },
    {
      type_: "H4",
      content: "gdsgsdjngnlsjngk;ldsngonsd",
    },
    {
      type_: "H5",
      content: "gdsgsdjngnlsjngk;ldsngonsd",
    },
    {
      type_: "H6",
      content: "gdsgsdjngnlsjngk;ldsngonsd",
    },
    {
      type_: "P",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque suscipit massa, sed lobortis magna feugiat ut. Mauris rhoncus vehicula enim. Morbi purus nibh, faucibus ac tortor a, fermentum aliquet enim. Vivamus ac accumsan tortor, nec tristique lacus. Phasellus ultrices at nisi vel efficitur. Integer vel urna eu risus mollis suscipit. Morbi a interdum dolor, in mollis neque. Donec vestibulum, lacus ornare tincidunt convallis, leo tortor dignissim justo, vitae lobortis elit augue quis erat. Maecenas in est vel dolor facilisis ornare non ut nunc. Donec commodo fringilla arcu. Phasellus vulputate volutpat tellus vitae consectetur. Phasellus gravida laoreet accumsan.",
    },
  ],
};

const PostPage = () => {
  const postStore = usePostStore();
  const [isSavedPost, setIsSavedPost] = useState(false);

  useEffect(() => {
    postStore.setData(templateData);
    initPostStore();
  }, []);

  return (
    <BodyWrapper fullWidth={false}>
      <PostPanel isSavedPost={false} />
      <img
        className="w-full h-[400px] rounded-lg object-cover"
        src={templateData.cover}
        alt=""
      />
      <div className="flex justify-between mt-6">
        <div className="flex gap-4 items-center">
          <OriginLogo
            link="/origin"
            label={templateData.origin_name}
            imageUrl={templateData.origin_logo}
            size="L"
            border
            loaded
          />
          <div className="w-3 h-3 bg-secondary rounded-full"></div>
          <span className="font-date">
            {formatDate(templateData.date_of_publish)}
          </span>
        </div>
        <div className="flex gap-3">
          <Button
            title="Go to original post in web"
            icon={<Origin />}
            type="transparent"
            size="small"
          />
          <Button
            title={isSavedPost ? "Unsave from read list" : "Save to read list"}
            icon={isSavedPost ? <Heart /> : <HeartOutline />}
            type="transparent"
            size="small"
          />
        </div>
      </div>
      <h1 className="mt-5 font-bold text-[40px]">{templateData.title}</h1>
      <div className="w-full flex justify-center mt-10">
        <div className="w-[700px]">
          {templateData.content.map((item, index) => (
            <TextBlock key={index} type={item.type_} loaded>
              {item.content}
            </TextBlock>
          ))}
        </div>
      </div>
    </BodyWrapper>
  );
};

export default PostPage;
