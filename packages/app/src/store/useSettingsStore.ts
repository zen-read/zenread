import { ConfigType } from "@zenread/shared";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { loadConfig } from "../utils/loadConfig.js";

interface SettingsState {
  settings: ConfigType;
  setSettings: (settings: ConfigType) => void;
}

const loadedConfig = await loadConfig();

export const useSettingsStore = create<SettingsState>()(
  devtools(
    persist(
      (set) => ({
        settings: loadedConfig,
        setSettings: (settings) => set({ settings }),
      }),
      {
        name: "settings",
      },
    ),
  ),
);
