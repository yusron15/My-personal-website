import React from "react";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import CabangKami from "../../components/CabangKami/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";

import { getCabangs, getContent } from "../../redux/ducks/actions.js";
import { connect } from "react-redux";

class Cabang extends React.Component {
  async componentDidMount() {
    try {
      await this.props.getContent("cabang", this.props.currentLang, true);
      await this.props.getCabangs("ID");
      window.scroll(0, 0);
    } catch (error) {}
  }

  async componentDidUpdate(prevProps) {
    if (this.props.currentLang !== prevProps.currentLang) {
      await this.props.getCabangs(this.props.currentLang);
    }
  }

  render() {
    return (
      <>
        <CabangKami location={{ ...this.props.location }} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore,
  currentLang: state.pageStore.currentLang
});

const mapDispatchToProps = dispatch => ({
  getContent: (section, lang, toggle) =>
    dispatch(getContent(section, lang, toggle)),
  getCabangs: lang => dispatch(getCabangs(lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cabang);
