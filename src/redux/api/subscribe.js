import fetchJson from "../../utils/fetchJson";

let url = "subscribes";
export async function PostSubscribe(data) {
  try {
    const result = await fetchJson("POST", `${url}`, data);
    return result;
  } catch (error) {
    throw error;
  }
}
