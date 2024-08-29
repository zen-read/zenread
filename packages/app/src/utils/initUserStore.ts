import { invoke } from "@tauri-apps/api/core";

export const initUserStore = async () => {
  await invoke("init_user_store").then((r) => console.log(r));
};
