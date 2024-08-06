import { BaseDirectory, readTextFile } from "@tauri-apps/plugin-fs";
import { ConfigType } from "@zenread/shared";

export async function loadConfig(): Promise<ConfigType> {
  const config = await readTextFile("settings.json", {
    baseDir: BaseDirectory.AppConfig,
  });
  console.log("Config loaded successfully:", config);
  return JSON.parse(config);
}
