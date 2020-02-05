import fetchJson from "../../utils/fetchJson";

export async function GetAllKarir(lang, filter) {
  try {
    const result = await fetchJson("GET", `karirs/detail/${lang}`);
    return result;
  } catch (error) {
    throw error;
  }
}
