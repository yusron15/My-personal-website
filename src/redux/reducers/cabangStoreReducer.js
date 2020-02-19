const defaultState = {
  // header: "Cabang",
  // subtitle: "CabangCabangCabang",
  // image_background:
  //   "https://topgrowth.sgp1.digitaloceanspaces.com/cabang/Cabang-2.png1581935415",
  // cabangList: [],
  // cabangPage: {
  header: "Cabang",
  subtitle: "CabangCabang",
  image_background:
    "https://topgrowth.sgp1.digitaloceanspaces.com/cabang/Cabang-2.png1581935415",
  cabang: [],
  currentLang: "ID",
  currentLangFlag: "ID"
  // }
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "GET_CABANGS": {
      return {
        ...state,
        // cabangList: action.payload
        // cabang: action.payload
        ...action.payload
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
