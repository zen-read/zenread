use std::io::Write;
use scraper::{Html, Selector};

use crate::parser::html_by_url;

const SITEMAP_URL: &str = "https://say-hi.me/sitemap_index.xml";

/// Get all sitemaps
pub fn get_sitemaps() -> Vec<String> {
  let html = Html::parse_document(
    html_by_url(SITEMAP_URL).unwrap().as_str()
  );
  let mut sitemaps: Vec<String> = Vec::new();

  let selector = Selector::parse("loc").unwrap();
  for loc in html.select(&selector) {
    let url = loc.inner_html();
    if url.contains("post-sitemap") {
      sitemaps.push(url.clone());
    }
  }

  return sitemaps;
}

/// Get all links
pub fn get_links() -> Vec<String> {
  let sitemaps = get_sitemaps();
  let mut links: Vec<String> = Vec::new();

  for sitemap in sitemaps {
    let html = html_by_url(&sitemap).unwrap();
    let html = Html::parse_document(&html);
    let selector = Selector::parse("url").unwrap();
    let xml_links = html.select(&selector);

    for link in xml_links {
      links.push(link.html());
    }
  }

  return links;
}

/// Save posts links in file
pub fn save_posts() {
    let mut file = std::fs::File::create("posts.txt").unwrap();

    let links = get_links();

    for link in links {
        file.write_all(link.as_bytes()).unwrap();
        file.write_all(b"\n").unwrap();
    }
}

/// Get URL of last post
pub fn get_last_post() -> String {
  let posts = read_posts();

  // Get last url tag
  let post_sitemap = Selector::parse("url").unwrap();
  let html = Html::parse_document(&posts);
  let url = html.select(&post_sitemap).next().unwrap().inner_html();

  // Get loc
  let loc = Selector::parse("loc").unwrap();
  let html = Html::parse_document(&url);
  let url = html.select(&loc).next().unwrap().inner_html();

  println!("{}", url);

  return url;
}

/// Get content of post by URL
pub fn get_post_by_url(url: &str) -> String {
    let page = html_by_url(url).unwrap();
    let html = Html::parse_document(&page);

    // Title
    let title_tag = Selector::parse("h1").unwrap();
    let title = html.select(&title_tag).next().unwrap()
        .inner_html();
    println!("{}", title);

    // Time
    let time_tag = Selector::parse("time").unwrap();
    let time = html.select(&time_tag).next().unwrap()
        .attr("datetime").unwrap()
        .to_string();
    println!("{}", time);

    // Header image
    let img_wrap_tag = Selector::parse("div.featured").unwrap();
    let img_wrap = html.select(&img_wrap_tag).next().unwrap().inner_html();
    let img_tag = Html::parse_document(&img_wrap);
    let img = img_tag.select(&Selector::parse("a").unwrap())
        .next().unwrap()
        .attr("href").unwrap()
        .to_string();
    println!("{}", img);

    // Content
    let content_tag = Selector::parse("div.content-page").unwrap();
    let content_html = html.select(&content_tag).next().unwrap()
        .inner_html();
    let content = html2md::parse_html(content_html.as_str());
    println!("{}", content);

    return img;
}