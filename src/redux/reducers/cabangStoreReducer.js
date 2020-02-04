const defaultState = {
  cabangList: []
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "GET_CABANGS": {
      return {
        ...state,
        cabangList: action.payload
      };
    }
    default:
      return state;
  }
};
