import fetchJson from "../../utils/fetchJson";

export async function GetCabangs(lang) {
  try {
    let a = 1;
    if (lang == "ID") {
      a = 1;
    } else if (lang == "EN") {
      a = 2;
    } else if (lang == "MD") {
      a = 3;
    } else if (lang == "HK") {
      a = 4;
    }
    let query = `?filter[where][bahasaId]=${a}`;
    const result = await fetchJson("GET", `/cabangs${query}`);
    return result;
  } catch (error) {
    throw error;
  }
}
