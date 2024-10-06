import { TextBlockType } from "./TextBlockType.js";

export type ContentType = {
  type_: TextBlockType["type"];
  content: string;
};
