use reqwest;

pub async fn html_by_url(url: String) -> Result<String, reqwest::Error> {
  let resp = reqwest::get(url).await?.text().await?;
  Ok(resp)
}