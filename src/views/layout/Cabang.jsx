import React from "react";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import CabangKami from "../../components/CabangKami/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";

import { getCabangs, getContent } from "../../redux/ducks/actions.js";
import { connect } from "react-redux";

class Cabang extends React.Component {
  state = {};

  async componentDidMount() {
    try {
      console.log("adasdasdasdasdasda");

      this.props.getContent("cabang", this.props.currentLang, true);
      await this.props.getCabangs(this.props.currentLang);
      window.scroll(0, 0);
    } catch (error) {}
  }
  render() {
    return (
      <>
        {/* <Navbar /> */}
        {/* <ColoredNavbar /> */}
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
  // fetchPage: (section, lang) => dispatch(fetchPage(section, lang)),
  getContent: (section, lang, toggle) =>
    dispatch(getContent(section, lang, toggle)),
  getCabangs: lang => dispatch(getCabangs(lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cabang);
