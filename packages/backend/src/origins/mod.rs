use serde::Deserialize;
use actix_web::{web, Responder, HttpResponse};
mod get_base_info;
mod loading_posts;

#[derive(Deserialize, Clone)]
pub struct Origin {
  pub name: String,
  pub get_base_info: bool,
  pub load_range: String,
}

#[actix_web::get("/origins")]
pub async fn origins(query: web::Query<Origin>) -> impl Responder {
  let origin = query.clone().into_inner().name;
  let get_base_info = query.clone().into_inner().get_base_info;
  let load_range = query.clone().into_inner().load_range;

  let base_info;
  if get_base_info {
    base_info = get_base_info::BaseOriginInfo::get_base_info(origin.clone());
  } else {
    base_info = get_base_info::BaseOriginInfo::default();
  }

  loading_posts::loading_posts(origin.clone(), load_range.clone()).await;

  HttpResponse::Ok().json((origin, get_base_info, load_range, base_info))
}