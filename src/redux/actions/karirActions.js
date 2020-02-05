import { GetAllKarir } from "../api/karir";

export function getAllKarir(lang) {
  return async dispatch => {
    const result = await GetAllKarir(lang);

    dispatch({
      type: "GET_ALL_KARIR",
      payload: result
    });
  };
}
