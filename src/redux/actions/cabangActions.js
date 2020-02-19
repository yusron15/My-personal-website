import { GetCabangs } from "../api/cabang";

export function getCabangs(type) {
  return async dispatch => {
    let result = await GetCabangs(type);
    console.log(result, "asdscaada");
    dispatch({
      type: `GET_CABANGS`,
      payload: result
    });
  };
}
