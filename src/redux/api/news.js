import fetchJson from "../../utils/fetchJson";
import { func } from "prop-types";
export async function GetNews(type, page) {
  let url = "";

  let perPage = 11;
  if (type === "forex") {
    url = `https://news.topgrowthfutures.co.id/wp-json/wp/v2/posts?categories=8&per_page=${perPage}&page=${page}`;
  } else if (type === "stock") {
    url = `https://news.topgrowthfutures.co.id/wp-json/wp/v2/posts?categories=5&per_page=${perPage}&page=${page}`;
  } else if (type === "market") {
    url = `https://news.topgrowthfutures.co.id/wp-json/wp/v2/posts?categories=138&per_page=${perPage}&page=${page}`;
  }
  try {
    const response = await fetch(url);
    const json = await response.json();
    if (json.data && json.data.status === 400) throw json;
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
