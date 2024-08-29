import { invoke } from "@tauri-apps/api/core";
import { UserStoreType } from "@zenread/shared";
import { useUserStore } from "../store/useUserStore.js";

export const loadUserStore = async () => {
  await invoke("load_user_store").then((r) => {
    useUserStore
      .getState()
      .setUserStore(JSON.parse(r as string) as UserStoreType);
  });
};
