use crate::origins::get_base_info;
use crate::parser::sitemap_parser;

pub async fn loading_posts(origin_name: String, load_range: String) {
  let origin_info = get_base_info::BaseOriginInfo::get_base_info(origin_name.clone());
  let parse_method = origin_info.method;
  match parse_method {
    get_base_info::ParseMethod::Sitemap => {
      println!("Loading range: {}", load_range);
      sitemap_parser(origin_info.sitemap).await;
    }
    get_base_info::ParseMethod::API => {
      println!("API parsing is not implemented yet!");
    }
  }
}