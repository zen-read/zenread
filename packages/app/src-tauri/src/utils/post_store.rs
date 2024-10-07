use serde::{Deserialize, Serialize};
use serde_json;
use std::{fs, io::Write};
use rand::Rng;
use tauri::AppHandle;
use std::path::PathBuf;
use tauri::Manager;

#[derive(Debug, Serialize, Deserialize)]
pub enum TextBlockType {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ContentType {
  #[serde(default)]
  pub text: String,

  pub type_: TextBlockType
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PostData {
  #[serde(default)]
  pub cover: String,

  #[serde(default)]
  pub origin_name: String,

  #[serde(default)]
  pub origin_logo: String,

  #[serde(default)]
  pub date_of_publish: String,

  #[serde(default)]
  pub title: String,

  pub content: Vec<ContentType>
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PostStore {
  #[serde(default)]
  pub posts: Vec<i32>,
}

pub fn get_post_store_dir(handle: AppHandle) -> PathBuf {
  handle
    .path()
    .app_data_dir()
    .unwrap()
    .join("post_store")
}

impl Default for PostStore {
  fn default() -> Self {
    Self {
      posts: Vec::new()
    }
  }
}

impl Default for PostData {
  fn default() -> Self {
    Self {
      cover: String::new(),
      origin_name: String::new(),
      origin_logo: String::new(),
      date_of_publish: String::new(),
      title: String::new(),
      content: Vec::new()
    }
  }
}

impl PostStore {
  pub fn init(handle: AppHandle) {
    let store_dir = get_post_store_dir(handle);

    if !store_dir.exists() {
      fs::create_dir_all(store_dir.clone()).expect("Failed to create post store directory");
      let store_file = fs::File::create(store_dir.join("post_store.json")).expect("Failed to create post store file");
      let post_store = Self::default();
      serde_json::to_writer_pretty(store_file, &post_store)
        .expect("Failed to write post store file")
    } else {
      println!("Post store already exists");
    }
  }

  pub fn load(handle: AppHandle) -> Self {
    let store_path = get_post_store_dir(handle).join("post_store.json");
    let store_file = fs::File::open(store_path).expect("Failed to open post store file");
    serde_json::from_reader(store_file).expect("Failed to parse post store file")
  }

  pub fn add_post(handle: AppHandle, id: i32) {
    let store_path = get_post_store_dir(handle.clone()).join("post_store.json");
    let mut updated_store = Self::load(handle);
    let _ = &updated_store.posts.push(id);

    let mut store_file = fs::File::create(store_path).expect("Failed to open post store file");
    store_file.write_all(serde_json::to_string(&updated_store).unwrap().as_bytes())
        .expect("Failed to update post store file");
  }

  pub fn delete_post(handle: AppHandle, id: i32) {
    let store_path = get_post_store_dir(handle.clone()).join("post_store.json");
    let mut updated_store = Self::load(handle);
    let _ = &updated_store.posts.retain(|&x| x != id);

    let mut store_file = fs::File::create(store_path).expect("Failed to open post store file");
    store_file.write_all(serde_json::to_string(&updated_store).unwrap().as_bytes())
        .expect("Failed to update post store file");
  }
}

impl PostData {
  pub fn check(handle: AppHandle) {
    let store_dir = get_post_store_dir(handle.clone());

    if !store_dir.exists() {
      PostStore::init(handle);
    } else {
      println!("Post store already exists! You can add posts later");
    }
  }

  pub fn save(handle: AppHandle, data: PostData) {
    let store_dir = get_post_store_dir(handle.clone());
    let id = rand::thread_rng().gen::<i32>();

    let post_file = fs::File::create(store_dir.join(id.to_string() + ".json")).expect("Failed to create post file");
    serde_json::to_writer_pretty(post_file, &data)
        .expect("Failed to write post file");

    PostStore::add_post(handle, id);
  }

  pub fn delete(handle: AppHandle, id: i32) {
    let store_dir = get_post_store_dir(handle.clone());
    fs::remove_file(store_dir.join(id.to_string() + ".json")).expect("Failed to delete post file");

    PostStore::delete_post(handle, id);
  }
}