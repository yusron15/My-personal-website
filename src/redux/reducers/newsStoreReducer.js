const defaultState = {
  news: {
    stock: [],
    forex: [],
    market: []
  }
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "GET_NEWS_STOCK": {
      return {
        ...state,
        news: {
          ...state.news,
          stock: action.payload
        }
      };
    }
    case "GET_NEWS_MARKET": {
      return {
        ...state,
        news: {
          ...state.news,
          market: action.payload
        }
      };
    }
    case "GET_NEWS_FOREX": {
      return {
        ...state,
        news: {
          ...state.news,
          forex: action.payload
        }
      };
    }

    default:
      return state;
  }
};
