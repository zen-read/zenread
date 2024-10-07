import { ContentType } from "./ContentType.js";

export interface PostDataType {
  cover: string;
  origin_name: string;
  origin_logo: string;
  date_of_publish: Date;
  title: string;
  content: ContentType[];
}
