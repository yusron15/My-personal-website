import fetchJson from "../../utils/fetchJson";

let url = "kontaks";
export async function PostKontak(data) {
  try {
    const result = await fetchJson("POST", `${url}`, data);

    return result;
  } catch (error) {
    throw error;
  }
}
