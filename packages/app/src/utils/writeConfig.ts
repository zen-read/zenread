import { BaseDirectory, writeTextFile } from "@tauri-apps/plugin-fs";
import { ConfigType } from "@zenread/shared";

export async function writeConfig(config: ConfigType) {
  await writeTextFile("settings.json", JSON.stringify(config, null, 2), {
    baseDir: BaseDirectory.AppConfig,
  });
}
