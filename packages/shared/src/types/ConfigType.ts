export interface ConfigType {
  first_launch: boolean;
  dark_mode: "System" | "Light" | "Dark";
  font_headings: "Sans" | "Serif" | "Mono";
  font_text: "Sans" | "Serif" | "Mono";
  color_scheme: "default" | string | null;
  read_list_storage: "system" | string | null;
  font_size: number;
  show_notifications: boolean;
}
