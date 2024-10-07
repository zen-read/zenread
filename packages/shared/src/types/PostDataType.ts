import { ContentType } from "./ContentType.js";
import { TagType } from "./TagType.js";

export interface PostDataType {
  cover: string;
  origin_name: string;
  origin_logo: string;
  origin_link: string;
  date_of_publish: Date;
  title: string;
  tags: TagType[];
  content: ContentType[];
}
