use std::path::PathBuf;

use tauri::{AppHandle, Manager};

pub fn get_config_path(handle: AppHandle) -> PathBuf {
  handle
    .path()
    .app_config_dir()
    .unwrap()
    .join("settings.json")
}

pub fn get_config_dir(handle: AppHandle) -> PathBuf {
  get_config_path(handle)
    .parent()
    .unwrap()
    .to_path_buf()
}
