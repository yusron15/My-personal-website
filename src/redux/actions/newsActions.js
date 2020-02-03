import { GetNews, GetAllNews } from "../api/news";

export function getNews(type) {
  return async dispatch => {
    let result = await GetNews(type);
    dispatch({
      type: `GET_NEWS_${type.toUpperCase()}`,
      payload: result
    });
  };
}

export function getAllNews() {
  return async dispatch => {
    let result = await GetAllNews();

    dispatch({
      type: "GET_ALL_NEWS",
      payload: result
    });
  };
}
