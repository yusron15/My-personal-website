import fetchJson from "../../utils/fetchJson";
import { func } from "prop-types";
export async function GetNews(type) {
  let url = "";
  if (type === "forex") {
    url =
      "https://news.topgrowthfutures.co.id/wp-json/wp/v2/posts?categories=8";
  } else if (type === "stock") {
    url =
      "https://news.topgrowthfutures.co.id/wp-json/wp/v2/posts?categories=5";
  } else if (type === "market") {
    url =
      "https://news.topgrowthfutures.co.id/wp-json/wp/v2/posts?categories=138";
  }
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
}

export async function GetAllNews() {
  let url = "https://news.topgrowthfutures.co.id/wp-json/wp/v2/posts";
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
}
