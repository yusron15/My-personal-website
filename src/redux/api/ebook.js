import fetchJson from "../../utils/fetchJson";

export async function SubscribeEbook(data) {
  try {
    const result = await fetchJson("POST", `/ebooks/subscribeEbook`, data);
    return result;
  } catch (error) {
    throw error;
  }
}
