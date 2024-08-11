// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::AppHandle;
use utils::config::AppConfig;

mod utils;

#[tauri::command]
fn load_config(app_handle: AppHandle) -> String {
    let config = AppConfig::load(app_handle);
    serde_json::to_string(&config).unwrap()
}

#[tauri::command]
fn init_config(app_handle: AppHandle) {
    AppConfig::init_config(app_handle);
}

fn main() {
    let builder = tauri::Builder::default();

    builder
        .plugin(tauri_plugin_fs::init())
        .invoke_handler(tauri::generate_handler![load_config, init_config])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
