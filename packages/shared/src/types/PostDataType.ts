import { ContentType } from "./ContentType.js";

export interface PostDataType {
  id: number;
  cover: string;
  origin_name: string;
  origin_logo: string;
  date_of_publish: Date;
  title: string;
  content: ContentType[];
}
