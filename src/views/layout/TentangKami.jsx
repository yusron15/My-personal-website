import React from "react";
// import Navbar from "../../components/Navbars/Navbar.jsx";
import HeaderAboutUs from "../../components/TentangKami/HeaderAboutUs.jsx";
import VisiMisi from "../../components/TentangKami/VisiMisi.jsx";
import Footer from "../../components/Footers/Footer.jsx";
import { fetchPage, getContent } from "../../redux/ducks/actions.js";
import { connect } from "react-redux";
import NewsLetter from "../../components/NewsLetter/NewsLetter.jsx";

class TentangKami extends React.Component {
  state = {};

  async componentDidMount() {
    await this.props.getContent("tentangkami", this.props.currentLang, true);
    window.scroll(0, 0);
  }

  render() {
    return (
      <>
        {/* <Navbar /> */}
        <HeaderAboutUs location={{ ...this.props.location }} />
        <VisiMisi />

        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  currentLang: state.pageStore.currentLang
});

const mapDispatchToProps = dispatch => ({
  // fetchPage: (section, lang) => dispatch(fetchPage(section, lang)),
  getContent: (section, lang, toggle) =>
    dispatch(getContent(section, lang, toggle))
});

export default connect(mapStateToProps, mapDispatchToProps)(TentangKami);
