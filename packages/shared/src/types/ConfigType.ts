export interface ConfigType {
  firstLaunch: boolean;
  darkMode: "system" | "light" | "dark";
  fontHeadings: "sans" | "serif" | "mono";
  fontText: "sans" | "serif" | "mono";
  colorScheme: string | null;
  readListStorage: string | null;
  fontSize: number;
  showNotification: boolean;
}
