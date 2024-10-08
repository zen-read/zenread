pub fn html_by_url(url: &str) -> Result<String, reqwest::Error> {
  let resp = reqwest::blocking::get(url)?.text().unwrap();
  Ok(resp)
}