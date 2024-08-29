type TagType = {
  name: string;
  color: string;
};

type OriginType = {
  name: string;
  logo: string;
  link: string;
  desc: string;
  saved: boolean;
  categories: string[];
};

export interface UserStoreType {
  tags: TagType[];
  origins: OriginType[];
}
