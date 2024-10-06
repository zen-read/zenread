import { invoke } from "@tauri-apps/api/core";

export const deletePost = async (id: string) => {
  await invoke("delete_post", { id });
};
