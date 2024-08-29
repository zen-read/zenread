type TagType = {
  name: string;
  color: string;
};

export interface UserStoreType {
  tags: TagType[];
  origins: string[];
}
