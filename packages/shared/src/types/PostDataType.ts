import { ContentType } from "./ContentType.js";

export interface PostDataType {
  cover: string;
  originName: string;
  originLogo: string;
  dateOfPublish: Date;
  title: string;
  content: ContentType[];
}
