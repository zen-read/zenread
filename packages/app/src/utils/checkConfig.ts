import {
  BaseDirectory,
  create,
  exists,
  mkdir,
  writeTextFile,
} from "@tauri-apps/plugin-fs";

export async function checkConfig() {
  const appConfigDirExists = await exists("", {
    baseDir: BaseDirectory.AppConfig,
  });

  if (appConfigDirExists) {
    await create("settings.json", {
      baseDir: BaseDirectory.AppConfig,
    });
    await writeTextFile("settings.json", "{}", {
      baseDir: BaseDirectory.AppConfig,
    });
    return true;
  } else {
    await mkdir("", { baseDir: BaseDirectory.AppConfig });
    return false;
  }
}
