import { TextBlockType } from "./TextBlockType.js";

export type ContentType = {
  type: TextBlockType["type"];
  content: string;
};
