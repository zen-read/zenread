import { ConfigType } from "@zenread/shared";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SettingsState {
  settings: ConfigType;
  setSettings: (settings: ConfigType) => void;
}

export const useSettingsStore = create<SettingsState>()(
  devtools(
    persist(
      (set) => ({
        settings: {} as ConfigType,
        setSettings: (settings) => set({ settings }),
      }),
      {
        name: "settings",
      },
    ),
  ),
);
