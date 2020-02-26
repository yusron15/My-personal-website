import fetchJson from "../../utils/fetchJson";

export async function GetAllKarir(lang, filter) {
  try {
    const result = await fetchJson("GET", `karirs/detail/${lang}`);
    return result;
  } catch (error) {
    throw error;
  }
}

export async function GetKarirById(id) {
  try {
    const result = await fetchJson("GET", `karirs/${id}`);
    return result;
  } catch (error) {
    throw error;
  }
}
