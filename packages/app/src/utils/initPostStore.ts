import { invoke } from "@tauri-apps/api/core";

export const initPostStore = async () => {
  await invoke("init_post_store").then((r) => console.log(r));
};
