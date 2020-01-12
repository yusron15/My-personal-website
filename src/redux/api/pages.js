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
