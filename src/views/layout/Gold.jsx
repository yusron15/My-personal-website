import React from "react";
import { connect } from "react-redux";

import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import Content from "../../components/Gold/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";

import { fetchPage, getContent, getNews } from "../../redux/ducks/actions.js";

class Gold extends React.Component {
  state = {};
  componentDidMount = async () => {
    await this.props.getContent("Gold", this.props.currentLang, true);
    window.scroll(0, 0);
  };
  render() {
    return (
      <>
        {/* <Navbar /> */}
        {/* <div id="navbar" className="ml-auto" style={{ position: "fixed" }}> */}
        {/* <ColoredNavbar location={{ ...this.props.location }} /> */}
        {/* </div> */}
        <Content location={{ ...this.props.location }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Gold);
