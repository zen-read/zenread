import { invoke } from "@tauri-apps/api/core";
import { useSettingsStore } from "../store/useSettingsStore.js";
import { ConfigType } from "@zenread/shared";

export const loadConfig = async () => {
  await invoke("load_config").then((r) => {
    useSettingsStore
      .getState()
      .setSettings(JSON.parse(r as string) as ConfigType);
  });
};

