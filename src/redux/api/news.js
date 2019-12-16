import fetchJson, { fetchNews } from "../../utils/fetchJson";
import axios from "axios";

export async function GetNews() {
  try {
    const result = await fetchJson(
      // contoh api
      "GET",
      `http://rest.learncode.academy/api/ucon/news/`
    );
    return result;
  } catch (error) {
    throw error;
  }
}
