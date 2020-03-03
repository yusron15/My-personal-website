import { PostSubscribe } from "../api/subscribe";

export function postSubscribe(type) {
  return async dispatch => {
    let result = await PostSubscribe(type);
    dispatch({
      type: `POST_SUBSCRIBE`,
      payload: result
    });
  };
}
