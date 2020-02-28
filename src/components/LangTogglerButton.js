import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
  const currentLang = useSelector(state => state.pageStore.currentLang);
  const [lng, setLng] = useState("ID");
  const [load, setLoad] = useState(false);

  const initLang = async () => {
    let flagLocal = await localStorage.getItem("@currentFlag");

    await setLng(flagLocal || "ID");
    await setLoad(true);
  };

  useEffect(() => {
    initLang();
  }, [currentLang]);
  if (isMobile) {
    return (
      <>
        <LangContext.Consumer>
          {({ lang, toggleLang }) => (
            <ReactFlagsSelect
              direction="up"
              alignOptions="right"
              defaultCountry={props.currentLangFlag}
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
                let data;
                let lng;
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
                await localStorage.setItem("@currentLang", data);
                await localStorage.setItem("@currentFlag", a);
                await props.changeLangFlag(a);
                await props.changeLang(data);
                await props.getContent(props.activePage, data, true);

                await props.getContent("Header", data, true);
              }}
            />
          )}
        </LangContext.Consumer>
      </>
    );
  }
  if (!load) return null;
  return (
    <>
      <ReactFlagsSelect
        // defaultCountry={props.currentLangFlag}
        defaultCountry={lng}
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
          let data;
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
          await localStorage.setItem("@currentLang", data);
          await localStorage.setItem("@currentFlag", a);
          await props.changeLangFlag(a);
          await props.changeLang(data);

          await props.getContent(props.activePage, data, true);

          await props.getContent("Header", data, true);
        }}
      />
    </>
  );
}

const mapStateToProps = state => ({
  lang: state.pageStore.currentLang,
  currentLangFlag: state.pageStore.currentLangFlag,
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
    }),
  changeLangFlag: lang =>
    dispatch({
      type: "CHANGE_FLAG_LANG",
      payload: lang
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(LangTogglerButton);
