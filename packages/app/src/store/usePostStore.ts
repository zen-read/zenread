import { PostDataType } from "@zenread/shared/src";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface PostStoreState {
  data: PostDataType;
  setData: (data: PostDataType) => void;
}

export const usePostStore = create<PostStoreState>()(
  devtools(
    persist(
      (set) => ({
        data: {} as PostDataType,
        setData: (data: PostDataType) => set({ data }),
      }),
      {
        name: "post",
      },
    ),
  ),
);
