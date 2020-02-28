import { SubscribeEbook } from "../api/ebook";

export function subscribeEbook(data) {
  return async dispatch => {
    let result = await SubscribeEbook(data);
    console.log(result, "asdscaada");
    dispatch({
      type: `GET_CABANGS`,
      payload: result
    });

    return result;
  };
}
