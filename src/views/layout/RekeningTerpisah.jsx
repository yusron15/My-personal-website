import React from "react";
import { connect } from "react-redux";

import Navbar from "../../components/Navbars/Navbar.jsx";
import Content from "../../components/RekeningTerpisah/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";

import { getContent } from "../../redux/ducks/actions.js";

class RekeningTerpisah extends React.Component {
  state = {};
  componentDidMount = async () => {
    try {
      await this.props.getContent(
        "rekeningterpisah",
        this.props.currentLang,
        true
      );
    } catch (error) {
      console.log(error);
    }
    window.scroll(0, 0);
  };
  render() {
    return (
      <>
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
  getContent: (section, lang, toggle) =>
    dispatch(getContent(section, lang, toggle))
});

export default connect(mapStateToProps, mapDispatchToProps)(RekeningTerpisah);
