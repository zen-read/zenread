import { BaseDirectory, readTextFile } from "@tauri-apps/plugin-fs";

export async function loadConfig() {
  const config = await readTextFile("settings.json", {
    baseDir: BaseDirectory.AppConfig,
  });
  return JSON.parse(config);
}
