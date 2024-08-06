import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SettingsToggleState {
  isSettingsOpen: boolean | undefined;
  toggleSettings: () => void;
}

export const useSettingsToggleStore = create<SettingsToggleState>()(
  devtools(
    persist(
      (set) => ({
        isSettingsOpen: false,
        toggleSettings: () =>
          set((state) => ({ isSettingsOpen: !state.isSettingsOpen })),
      }),
      {
        name: "settings-toggle",
      },
    ),
  ),
);
