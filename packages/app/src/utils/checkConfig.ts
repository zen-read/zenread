import {
  BaseDirectory,
  create,
  exists,
  mkdir,
  writeTextFile,
} from "@tauri-apps/plugin-fs";

import type { ConfigType } from "@zenread/shared";

async function writeConfig(config: ConfigType) {
  await writeTextFile("settings.json", JSON.stringify(config, null, 2), {
    baseDir: BaseDirectory.AppConfig,
  });
}

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

    const defaultConfig: ConfigType = {
      firstLaunch: true,
      darkMode: "system",
      fontHeadings: "sans",
      fontText: "sans",
      colorScheme: null,
      readListStorage: null,
      fontSize: 16,
      showNotification: true,
    };

    await writeConfig(defaultConfig);

    return true;
  } catch (error) {
    console.error("Error checking config:", error);
    return false;
  }
}
