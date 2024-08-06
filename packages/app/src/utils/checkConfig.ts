import { BaseDirectory, create, exists, mkdir } from "@tauri-apps/plugin-fs";
import { defaultConfig } from "@zenread/shared";

import { writeConfig } from "./writeConfig.js";

export async function checkConfig() {
  try {
    const baseDir = BaseDirectory.AppConfig;
    const appConfigDirExists = await exists("", { baseDir });

    if (!appConfigDirExists) {
      await mkdir("", { baseDir });
      return await checkConfig();
    }

    const configFilePath = "settings.json";
    const configExists = await exists(configFilePath, { baseDir });

    if (configExists) {
      return true;
    }

    await create(configFilePath, { baseDir });
    await writeConfig(defaultConfig);

    return true;
  } catch (error) {
    console.error("Error checking config:", error);
    return false;
  }
}
