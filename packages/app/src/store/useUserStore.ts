import { UserStoreType } from "@zenread/shared";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserStoreState {
  userStore: UserStoreType;
  setUserStore: (userStore: UserStoreType) => void;
}

export const useUserStore = create<UserStoreState>()(
  devtools(
    persist(
      (set) => ({
        userStore: {} as UserStoreType,
        setUserStore: (userStore) => set({ userStore }),
      }),
      {
        name: "userStore",
      },
    ),
  ),
);
