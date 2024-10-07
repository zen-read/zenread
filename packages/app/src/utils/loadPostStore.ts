import { invoke } from "@tauri-apps/api/core";

export const loadPostStore = async () => {
  return await invoke("load_post_store");
};
