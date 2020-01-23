import { GetNews } from "../api/news";

export function getNews(type) {
  return async dispatch => {
    let result = await GetNews(type);
    dispatch({
      type: `GET_NEWS_${type.toUpperCase()}`,
      payload: result
    });
  };
}
