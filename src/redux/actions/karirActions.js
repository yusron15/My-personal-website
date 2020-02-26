import { GetAllKarir, GetKarirById } from "../api/karir";

export function getAllKarir(lang) {
  return async dispatch => {
    const result = await GetAllKarir(lang.toLowerCase());
    dispatch({
      type: "GET_ALL_KARIR",
      payload: result
    });
  };
}

export function getKarirById(id) {
  return async dispatch => {
    const result = await GetKarirById(id);
    dispatch({
      type: "GET_DETAIL_KARIR",
      payload: result
    });
  };
}
