import { getPage, GetContent } from "../api/pages";

export function fetchPage(section, lang) {
  return async dispatch => {
    const result = await getPage(section, lang);

    dispatch({
      type: "GET_PAGE",
      payload: result
    });
  };
}

export function getContent(page, lang) {
  return async dispatch => {
    const result = await GetContent(page, lang);

    dispatch({
      type: "GET_CONTENT",
      payload: result
    });
  };
}
