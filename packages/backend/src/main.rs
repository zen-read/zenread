use actix_web::{web, App, HttpServer, Responder, HttpResponse};

mod origins;
mod parser;
mod utils;

async fn greet() -> impl Responder {
    HttpResponse::Ok().body("Hello, Rust backend!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(origins::origins)
            .route("/", web::get().to(greet))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
