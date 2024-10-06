import { invoke } from "@tauri-apps/api/core";

export const savePost = async (data: string) => {
  await invoke("save_post", { data });
};
