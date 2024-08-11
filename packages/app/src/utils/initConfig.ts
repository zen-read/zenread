import { invoke } from '@tauri-apps/api/core';

export const initConfig = async () => {
  await invoke('init_config').then(r => console.log(r));
}