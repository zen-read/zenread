import { invoke } from "@tauri-apps/api/core";

export const loadPostStore = async () => {
  await invoke("update_post_store").then((r) => console.log(r));
};
