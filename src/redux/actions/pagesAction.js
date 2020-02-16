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

export function getContent(page, lang, toggle) {
  return async dispatch => {
    let langLocal = await localStorage.getItem("@currentLang");
    langLocal =
      langLocal !== null ? langLocal.toLowerCase() : lang.toLowerCase();

    if (toggle) {
      const result = await GetContent(page, langLocal);
      dispatch({
        type: "GET_CONTENT",
        payload: result
      });
      if (page !== "Header") {
        dispatch({
          type: "SET_CURRENT_PAGE",
          payload: page
        });
      }
    }
  };
}
