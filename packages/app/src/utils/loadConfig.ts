import { invoke } from '@tauri-apps/api/core';
export const loadConfig = async () => {
  await invoke('load_config').then(r => console.log(r));
}