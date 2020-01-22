import React from "react";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import CabangKami from "../../components/CabangKami/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";

import { fetchPage, getContent } from "../../redux/ducks/actions.js";
import { connect } from "react-redux";

class Cabang extends React.Component {
  state = {};

  async componentDidMount() {
    await this.props.getContent("cabang", "id", true);
    window.scroll(0, 0);
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
    dispatch(getContent(section, lang, toggle))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cabang);
