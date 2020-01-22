import fetchJson from "../../utils/fetchJson";

export async function getPage(section, lang) {
  try {
    const result = await fetchJson(
      "GET",
      `Pages/${section}/getDetailByType/${lang}`
    );
    return result;
  } catch (error) {
    throw error;
  }
}

export async function GetContent(page, lang) {
  try {
    const result = await fetchJson(
      "GET",
      `Pages/${page}/getDetailByType/${lang}`
    );
    return result;
  } catch (error) {
    throw error;
  }
}
