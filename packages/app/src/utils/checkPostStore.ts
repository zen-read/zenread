import { invoke } from "@tauri-apps/api/core";

export const deletePost = async () => {
  await invoke("check_post");
};
