import fetchJson from "../../utils/fetchJson";

let url = "http://rest.learncode.academy/api/ucon/news/";
export async function GetNews(type) {
  if (type === "forex") {
    url = "http://news.topgrowthfutures.co.id/wp-json/wp/v2/posts?categories=8";
  } else if (type === "stock") {
    url = "http://news.topgrowthfutures.co.id/wp-json/wp/v2/posts?categories=5";
  } else if (type === "market") {
    url =
      "http://news.topgrowthfutures.co.id/wp-json/wp/v2/posts?categories=138";
  }
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
}
