import { getLanding } from "../api/landing";

export function fetchLanding(lang) {
  return async dispatch => {
    const result = await getLanding(lang);

    dispatch({
      type: "GET_LANDING",
      payload: result
    });
  };
}
