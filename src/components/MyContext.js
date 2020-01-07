import React from "react";

import eng from "../lang/eng.json";
import id from "../lang/id.json";

export const lang = {
  eng,
  id
};

export const LangContext = React.createContext({
  lang: lang,
  toggleLang: () => {}
});
