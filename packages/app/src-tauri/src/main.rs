// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::AppHandle;
use utils::{config::AppConfig, user_store::UserStore, post_store::PostStore, post_store::PostData};

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

#[tauri::command]
fn init_user_store(app_handle: AppHandle) {
    UserStore::init(app_handle)
}

#[tauri::command]
fn load_user_store(app_handle: AppHandle) -> String {
    let store = UserStore::load(app_handle);
    serde_json::to_string(&store).unwrap()
}

#[tauri::command]
fn update_user_store(app_handle: AppHandle, store: String) -> String {
  let store = UserStore::update(app_handle, store);
  serde_json::to_string(&store).unwrap()
}

#[tauri::command]
fn load_post_store(app_handle: AppHandle) -> String {
    let store = PostStore::load(app_handle);
    serde_json::to_string(&store).unwrap()
}

#[tauri::command]
fn add_post_store(app_handle: AppHandle, store: i32) {
    PostStore::add_post(app_handle, store);
}

#[tauri::command]
fn get_all_saved_posts(app_handle: AppHandle) -> Vec<PostData> {
    PostData::get_all_saved_posts(app_handle)
}

#[tauri::command]
fn init_post_store(app_handle: AppHandle) {
    PostStore::init(app_handle)
}

#[tauri::command]
fn check_post_store(app_handle: AppHandle) {
    PostData::check(app_handle)
}

#[tauri::command]
fn save_post(app_handle: AppHandle, data: String) {
    PostData::save(app_handle, serde_json::from_str(&data).unwrap());
}

#[tauri::command]
fn delete_post(app_handle: AppHandle, id: i32) {
    PostData::delete(app_handle, id);
}

fn main() {
    let builder = tauri::Builder::default();

    builder
        .plugin(tauri_plugin_fs::init())
        .invoke_handler(tauri::generate_handler![
          load_config,
          init_config,
          init_user_store,
          load_user_store,
          update_user_store,
          load_post_store,
          add_post_store,
          init_post_store,
          check_post_store,
          save_post,
          delete_post,
          get_all_saved_posts
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
