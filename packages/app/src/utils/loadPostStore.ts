import { invoke } from "@tauri-apps/api/core";

export const loadPostStore = async () => {
  await invoke("load_post_store").then((r) => console.log(r));
};
