import { GetNews, GetAllNews } from "../api/news";

export function getNews(type, page = 1) {
  return async dispatch => {
    let result = await GetNews(type, page);
    dispatch({
      type: `GET_NEWS_TYPE`,
      payload: result,
      typeNews: type
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
