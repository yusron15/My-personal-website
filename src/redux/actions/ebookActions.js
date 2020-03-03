import { SubscribeEbook } from "../api/ebook";

export function subscribeEbook(data) {
  return async dispatch => {
    let result = await SubscribeEbook(data);
    dispatch({
      type: ``,
      payload: result
    });

    return result;
  };
}
