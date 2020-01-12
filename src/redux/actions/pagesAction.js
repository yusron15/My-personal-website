import { getPage } from "../api/pages";

export function fetchPage(section, lang) {
  return async dispatch => {
    const result = await getPage(section, lang);

    dispatch({
      type: "GET_PAGE",
      payload: result
    });
  };
}
