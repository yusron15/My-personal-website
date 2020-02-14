import React from "react";
// import Navbar from "../../components/Navbars/Navbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import Content from "../../components/Legalitas/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";
import { getContent } from "../../redux/ducks/actions.js";
import { connect } from "react-redux";

class LegalitasPage extends React.Component {
  async componentDidMount() {
    await this.props.getContent("legalitas", this.props.currentLang, true);
    window.scroll(0, 0);
  }
  render() {
    return (
      <>
        {/* <Navbar /> */}
        {/* <BlurryNavbar /> */}
        {/* <ColoredNavbar location={{ ...this.props.location }} /> */}
        <Content location={{ ...this.props.location }} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  getContent: (section, lang) => dispatch(getContent(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(LegalitasPage);
