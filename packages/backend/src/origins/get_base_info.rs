use serde::{Deserialize, Serialize};
use std::fs;
use serde_json;

#[derive(Deserialize, Serialize, Debug)]
pub enum ParseMethod {
  Sitemap,
  API
}

#[derive(Deserialize, Serialize, Debug)]
pub struct Link {
  pub title: String,
  pub link: String
}

#[derive(Deserialize, Serialize, Debug)]
pub struct BaseOriginInfo {
  pub short_name: String,
  pub name: String,
  pub info: String,
  pub origin_link: String,
  pub logo: String,
  pub method: ParseMethod,
  pub sitemap: String,
  pub links: Vec<Link>
}

impl Default for BaseOriginInfo {
  fn default() -> Self {
    Self {
      short_name: String::new(),
      name: String::new(),
      info: String::new(),
      logo: String::new(),
      origin_link: String::new(),
      sitemap: String::new(),
      method: ParseMethod::Sitemap,
      links: Vec::new()
    }
  }
}

const ORIGINS_INFO_PATH: &str = "./data/origins_info.json";

impl BaseOriginInfo {
  pub fn get_base_info(name: String) -> BaseOriginInfo {
    let origins_file = fs::File::open(ORIGINS_INFO_PATH).expect("Failed to open origins info file");
    let origins: Vec<BaseOriginInfo> = serde_json::from_reader(origins_file).expect("Failed to parse origins info file");
    origins.into_iter().find(|origin| origin.short_name == name).unwrap_or_default()
  }
}