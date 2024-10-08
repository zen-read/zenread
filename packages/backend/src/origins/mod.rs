use serde::Deserialize;
use actix_web::{web, Responder, HttpResponse};

#[derive(Deserialize, Clone)]
pub struct Origin {
  pub name: String,
  pub get_base_info: bool
}

#[actix_web::get("/origins")]
pub async fn origins(query: web::Query<Origin>) -> impl Responder {
  let origin = query.clone().into_inner().name;
  let get_base_info = query.into_inner().get_base_info;
  HttpResponse::Ok().json((origin, get_base_info))
}