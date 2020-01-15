import React from "react";
import { LangContext } from "./MyContext";

import ReactFlagsSelect from "react-flags-select";

//import css module
import "react-flags-select/css/react-flags-select.css";

function LangTogglerButton() {
  return (
    <LangContext.Consumer>
      {({ lang, toggleLang }) => (
        <ReactFlagsSelect
          defaultCountry={"ID"}
          countries={["ID", "GB", "CN"]}
          customLabels={{ ID: "Indonesia", GB: "English", CN: "China" }}
          showSelectedLabel={false}
          showOptionLabel={true}
          className="menu-flags"
          onSelect={countryCode => toggleLang(countryCode)}
        />
      )}
    </LangContext.Consumer>
  );
}

export default LangTogglerButton;
