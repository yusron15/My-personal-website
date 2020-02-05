const defaultState = {
  karirList: []
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "GET_ALL_KARIR": {
      return {
        ...state,
        karirList: action.payload
      };
    }
    default:
      return state;
  }
};
