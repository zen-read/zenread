import { configureStore } from "@reduxjs/toolkit";

export type SettingsOpened = { type: "open" };
export type SettingsClosed = { type: "close" };
export type Action = SettingsOpened | SettingsClosed;

type SettingsOpenedType = {
  opened: boolean;
};

const initialState: SettingsOpenedType = { opened: false };

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "open":
      return { ...state, opened: true };
    case "close":
      return { ...state, opened: false };
    default:
      return state;
  }
};

export const settingsOpenedStore = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof settingsOpenedStore.getState>;
export type AppDispatch = typeof settingsOpenedStore.dispatch;
