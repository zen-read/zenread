import { invoke } from "@tauri-apps/api/core";

export const updatePostStore = async (id: number) => {
  await invoke("update_post_store", { store: id }).then((r) => console.log(r));
};
