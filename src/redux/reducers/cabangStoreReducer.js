const defaultState = {
  cabangList: [],
  currentLang: "ID",
  currentLangFlag: "ID"
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "GET_CABANGS": {
      return {
        ...state,
        cabangList: action.payload
      };
    }
    case "CHANGE_LANG": {
      return {
        ...state,
        currentLang: action.payload
      };
    }
    default:
      return state;
  }
};
