import fetchJson from "../../utils/fetchJson";

let url = "http://rest.learncode.academy/api/ucon/news/";
export async function GetNews() {
  try {
    const result = await fetchJson("GET", url);
    return result;
  } catch (error) {
    throw error;
  }
}
