import { invoke } from "@tauri-apps/api/core";
import { UserStoreType } from "@zenread/shared";

export const updateUserStore = async (store: UserStoreType) => {
  await invoke("update_user_store", { store: JSON.stringify(store) });
};
