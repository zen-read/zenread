import { PostCard } from "@zenread/ui";
import BodyWrapper from "../components/BodyWrapper.js";

const templateData = [
  {
    backgroundImage:
      "https://i1.sndcdn.com/artworks-oGvaMt0dsBWPL7WZ-qgbAMA-t500x500.jpg",
    header: "Maxwell",
    date: new Date(),
    originLogo:
      "https://m.media-amazon.com/images/I/31+8EYj8ZdL._UXNaN_FMjpg_QL85_.jpg",
    loaded: true,
    href: "/post",
    originUrl: "/origin",
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
    originUrl: "/origin",
  },
];

const Index = () => {
  return (
    <BodyWrapper fullWidth={false}>
      <h1 className="text-5xl font-bold w-full pb-3 border-b">Latest</h1>
      <div className="mt-5 grid sm:grid-cols-2 grid-cols-1 gap-[18px]">
        {templateData.map((data, index) => (
          <PostCard key={index} {...data} />
        ))}
      </div>
    </BodyWrapper>
  );
};

export default Index;
