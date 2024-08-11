use std::{fs, path::PathBuf};
use serde_json;
use serde::{Serialize, Deserialize};
use tauri::{AppHandle, Manager};

#[derive(Debug, Serialize, Deserialize)]
enum DarkMode {
  System,
  Dark,
  Light,
}

#[derive(Debug, Serialize, Deserialize)]
enum FontType {
  Sans,
  Serif,
  Mono,
}

/// Represents the configuration of the application.
#[derive(Debug, Serialize, Deserialize)]
pub struct AppConfig {
  /// Whether this is the first launch of the application.
  #[serde(default)]
  pub first_launch: bool,

  /// The dark mode setting.
  pub dark_mode: DarkMode,

  /// The font type for headings.
  pub font_headings: FontType,

  /// The font type for text.
  pub font_text: FontType,

  /// The color scheme.
  #[serde(default)]
  pub color_scheme: String,

  /// The storage for the read list.
  #[serde(default)]
  pub read_list_storage: String,

  /// The font size.
  #[serde(default)]
  pub font_size: i32,

  /// Whether to show notifications.
  #[serde(default)]
  pub show_notifications: bool
}

impl Default for AppConfig {
  fn default() -> Self {
    Self {
      first_launch: true,
      dark_mode: DarkMode::System,
      font_headings: FontType::Sans,
      font_text: FontType::Serif,
      color_scheme: String::new(),
      read_list_storage: String::new(),
      font_size: 16,
      show_notifications: true
    }
  }
}

impl AppConfig {
  /// Gets the path of the configuration file.
  ///
  /// # Arguments
  ///
  /// * `handle` - The handle to the application.
  ///
  /// # Returns
  ///
  /// The path of the configuration file.
  fn get_config_path(handle: AppHandle) -> PathBuf {
    handle.path().app_config_dir().unwrap().join("settings.json")
  }

  /// Gets the directory of the configuration file.
  ///
  /// # Arguments
  ///
  /// * `handle` - The handle to the application.
  ///
  /// # Returns
  ///
  /// The directory of the configuration file.
  fn get_config_dir(handle: AppHandle) -> PathBuf {
    Self::get_config_path(handle).parent().unwrap().to_path_buf()
  }

  /// Creates the configuration file if it does not already exist.
  ///
  /// # Arguments
  ///
  /// * `handle` - The handle to the application.
  ///
  /// # Panics
  ///
  /// This function panics if it fails to create the configuration directory.
  pub fn init_config(handle: AppHandle) {
    let config_path = Self::get_config_path(handle);
    if !config_path.exists() {
      fs::create_dir_all(config_path.parent().unwrap()).expect("Failed to create config directory");
      let config = Self::default();
      let config_file = fs::File::create(config_path).expect("Failed to create config file");
      serde_json::to_writer_pretty(config_file, &config).expect("Failed to write config file");
    } else {
      println!("Config already exists");
    }
  }

  /// Loads the configuration from the file.
  ///
  /// # Arguments
  ///
  /// * `handle` - The handle to the application.
  ///
  /// # Returns
  ///
  /// The loaded configuration.
  pub fn load(handle: AppHandle) -> Self {
    let config_path = Self::get_config_path(handle);
    println!("{}", config_path.to_str().unwrap());
    let config_file = fs::File::open(config_path).expect("Failed to open config file");
    serde_json::from_reader(config_file).expect("Failed to parse config file")
  }

  /// Saves the configuration to the file.
  ///
  /// # Arguments
  ///
  /// * `handle` - The handle to the application.
  pub fn save(&self, handle: AppHandle) {
    let config_path = Self::get_config_path(handle);
    let config_file = fs::File::create(config_path).expect("Failed to create config file");
    serde_json::to_writer_pretty(config_file, self).expect("Failed to write config file")
  }
}