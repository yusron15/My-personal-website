import React from "react";
import { connect } from "react-redux";

import { LangContext } from "./MyContext";

import ReactFlagsSelect from "react-flags-select";

//import css module
import "react-flags-select/css/react-flags-select.css";
import { isMobile } from "react-device-detect";
import eng from "../lang/eng.json";
import id from "../lang/id.json";
import cn from "../lang/cn.json";
import cn_tr from "../lang/cn_tr.json";
import "../assets/css/main.css";
import { getContent } from "../redux/ducks/actions";

function LangTogglerButton(props) {
  if (isMobile) {
    return (
      <>
        <LangContext.Consumer>
          {({ lang, toggleLang }) => (
            <ReactFlagsSelect
              alignOptions="right"
              defaultCountry={props.lang}
              countries={["ID", "GB", "CN", "HK"]}
              customLabels={{
                ID: "Bahasa",
                GB: "English",
                CN: "中国人",
                HK: "Chinese Traditional"
              }}
              showSelectedLabel={true}
              showOptionLabel={true}
              className="menu-flags lang-button"
              // onSelect={countryCode => toggleLang(countryCode)}
              onSelect={async a => {
                let data = id;
                if (a == "GB") {
                  data = "EN";
                }

                if (a == "CN") {
                  data = "MD";
                }

                if (a == "HK") {
                  data = "HK";
                }

                if (a == "ID") {
                  data = "ID";
                }
                await props.changeLang(a);
                await props.getContent(props.activePage, data, true);

                await props.getContent("Header", data, true);
              }}
            />
          )}
        </LangContext.Consumer>
      </>
    );
  }
  return (
    <>
      <LangContext.Consumer>
        {({ lang, toggleLang }) => (
          <ReactFlagsSelect
            defaultCountry={props.lang}
            countries={["ID", "GB", "CN", "HK"]}
            customLabels={{
              ID: "Bahasa",
              GB: "English",
              CN: "中国人",
              HK: "Chinese Traditional"
            }}
            showSelectedLabel={false}
            showOptionLabel={true}
            className="menu-flags lang-button"
            // onSelect={countryCode => toggleLang(countryCode)}
            onSelect={async a => {
              let data = id;
              if (a == "GB") {
                data = "EN";
              }

              if (a == "CN") {
                data = "MD";
              }

              if (a == "HK") {
                data = "HK";
              }

              if (a == "ID") {
                data = "ID";
              }
              await props.changeLang(a);
              await props.getContent(props.activePage, data, true);

              await props.getContent("Header", data, true);
            }}
          />
        )}
      </LangContext.Consumer>
    </>
  );
}

const mapStateToProps = state => ({
  // pageStore: state.pageStore
  lang: state.pageStore.currentLang,
  activePage: state.pageStore.activePage
});

const mapDispatchToProps = dispatch => ({
  // fetchPage: (section, lang) => dispatch(fetchPage(section, lang))

  getContent: (section, lang, toggle) =>
    dispatch(getContent(section, lang, toggle)),
  changeLang: lang =>
    dispatch({
      type: "CHANGE_LANG",
      payload: lang
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(LangTogglerButton);
