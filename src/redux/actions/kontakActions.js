import { PostKontak } from "../api/kontak";

export function postKontak(type) {
  return async dispatch => {
    let result = await PostKontak(type);
    dispatch({
      type: `POST_KONTAK`,
      payload: result
    });
  };
}
