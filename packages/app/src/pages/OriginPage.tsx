import { OriginBlock, PostCard } from "@zenread/ui";
import BodyWrapper from "../components/BodyWrapper.js";

const originInfo = {
  originLogo:
    "https://m.media-amazon.com/images/I/31+8EYj8ZdL._UXNaN_FMjpg_QL85_.jpg",
  originName: "Maxwell.com",
  isSaved: false,
  description:
    "Maxwell the Cat, also known as Spinning Cat is a black-and-white tuxedo cat who achieved virality online in October and November 2022 after her model was first added to Garry's Mod and later used as source material for videos in which it spins around as various songs play, similar to the Horizontally Spinning Rat memes. The cat is also known as Dingus the Cat and Big Boobs, and its real name is Jess.",
  links: [
    {
      title: "Website",
      link: "https://www.maxwellcat.world",
    },
  ],
  loaded: true,
};

const templateArticles = [
  {
    backgroundImage:
      "https://i1.sndcdn.com/artworks-oGvaMt0dsBWPL7WZ-qgbAMA-t500x500.jpg",
    header: "Maxwell",
    date: new Date(),
    originLogo:
      "https://m.media-amazon.com/images/I/31+8EYj8ZdL._UXNaN_FMjpg_QL85_.jpg",
    loaded: true,
    href: "/post",
    originUrl: "",
  },
  {
    backgroundImage:
      "https://i1.sndcdn.com/artworks-oGvaMt0dsBWPL7WZ-qgbAMA-t500x500.jpg",
    header: "Maxwell",
    date: new Date(),
    originLogo:
      "https://m.media-amazon.com/images/I/31+8EYj8ZdL._UXNaN_FMjpg_QL85_.jpg",
    loaded: true,
    href: "/post",
    originUrl: "",
  },
];

const OriginPage = () => {
  return (
    <BodyWrapper fullWidth={false}>
      <OriginBlock className="mt-11" {...originInfo} />
      <h1 className="text-5xl font-bold w-full pb-3 border-b mt-7">
        Latest articles from {originInfo.originName}
      </h1>
      <div className="mt-7 grid grid-cols-2 gap-[18px]">
        {templateArticles.map((data, index) => (
          <PostCard key={index} {...data} />
        ))}
      </div>
    </BodyWrapper>
  );
};

export default OriginPage;
