import { GetNews } from "../api/news";

export function getNews() {
  return async dispatch => {
    const result = await GetNews();
    dispatch({
      type: "GET_NEWS",
      payload: result
    });
    return result;
  };
}
