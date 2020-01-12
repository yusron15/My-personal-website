const defaultState = {
  news: []
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "GET_PAGE": {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};
