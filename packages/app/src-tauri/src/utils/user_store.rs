use serde::{Deserialize, Serialize};
use serde_json;
use std::{fs, io::Write};
use tauri::AppHandle;

use crate::utils::app_store::get_config_dir;

#[derive(Debug, Serialize, Deserialize)]
pub struct Tag {
  #[serde(default)]
  pub name: String,

  #[serde(default)]
  pub color: String
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UserStore {
  #[serde(default)]
  pub tags: Vec<Tag>,

  #[serde(default)]
  pub origins: Vec<String>
}

impl Default for UserStore {
  fn default() -> Self {
    Self {
      tags: Vec::new(),
      origins: Vec::new()
    }
  }
}

impl UserStore {
  pub fn init(handle: AppHandle) {
    let store_dir = get_config_dir(handle);
    let user_store = Self::default();
    let store_file = fs::File::create(store_dir.join("user_store.json")).expect("Failed to create user store file");
    serde_json::to_writer_pretty(store_file, &user_store)
        .expect("Failed to write user store file")
  }

  pub fn load(handle: AppHandle) -> Self {
    let store_path = get_config_dir(handle).join("user_store.json");
    println!("{}", store_path.to_str().unwrap());
    let store_file = fs::File::open(store_path).expect("Failed to open user store file");
    serde_json::from_reader(store_file).expect("Failed to parse user store file")
  }

  pub fn update(handle: AppHandle, store: String) {
    let store_path = get_config_dir(handle).join("user_store.json");
    let mut store_file = fs::File::create(store_path).expect("Failed to open user store file");
    store_file.write_all(store.as_bytes())
        .expect("Failed to update user store file")
  }
}
