import fetchJson from "../../utils/fetchJson";

export async function getLanding(lang) {
  try {
    const result = await fetchJson(
      "GET",
      `Pages/landing/getDetailByType/${lang}`
    );
    return result;
  } catch (error) {
    throw error;
  }
}
