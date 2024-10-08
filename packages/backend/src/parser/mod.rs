use scraper::{Html, Selector};
use crate::utils::html_by_url;

pub async fn sitemap_parser(sitemap: String) {
  let html = Html::parse_document(
    html_by_url(sitemap).await.unwrap().as_str()
  );
  let mut sitemaps: Vec<String> = Vec::new();

  let selector = Selector::parse("loc").unwrap();
  for loc in html.select(&selector) {
    let url = loc.inner_html();
    if url.contains("post-sitemap") {
      sitemaps.push(url.clone());
    }
  }

  let mut links: Vec<String> = Vec::new();

  for sitemap in sitemaps {
    let html = html_by_url(sitemap).await.unwrap();
    let html = Html::parse_document(&html);
    let selector = Selector::parse("url").unwrap();
    let xml_links = html.select(&selector);

    for link in xml_links {
      links.push(link.html());
    }
  }

  let links_range: Vec<_> = links.iter().rev().take(10).cloned().collect();
  for link in links_range {
    println!("{}", link);
  }
}