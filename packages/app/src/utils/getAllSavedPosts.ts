import { invoke } from "@tauri-apps/api/core";

export const getAllSavedPosts = async () => {
  return await invoke("get_all_saved_posts");
};
