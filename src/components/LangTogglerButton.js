import React from "react";
import { connect } from "react-redux";

import { LangContext } from "./MyContext";

import ReactFlagsSelect from "react-flags-select";

//import css module
import "react-flags-select/css/react-flags-select.css";

import eng from "../lang/eng.json";
import id from "../lang/id.json";
import cn from "../lang/cn.json";
import cn_tr from "../lang/cn_tr.json";

function LangTogglerButton(props) {
  return (
    <LangContext.Consumer>
      {({ lang, toggleLang }) => (
        <ReactFlagsSelect
          defaultCountry={"ID"}
          countries={["ID", "GB", "CN", "HK"]}
          customLabels={{
            ID: "Indonesian",
            GB: "English",
            CN: "Mandarin",
            HK: "Mandarin Traditional"
          }}
          showSelectedLabel={false}
          showOptionLabel={true}
          className="menu-flags"
          // onSelect={countryCode => toggleLang(countryCode)}
          onSelect={async a => {
            let data = id;
            if (a == "GB") {
              data = eng;
            }

            if (a == "CN") {
              data = cn;
            }

            if (a == "HK") {
              data = cn_tr;
            }
            await props.fetchDataLang(data);
          }}
        />
      )}
    </LangContext.Consumer>
  );
}

const mapStateToProps = state => ({
  // pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  // fetchPage: (section, lang) => dispatch(fetchPage(section, lang))

  fetchDataLang: data =>
    dispatch({
      type: "GET_ALL_PAGE",
      payload: data
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(LangTogglerButton);
