import React from "react";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import Content from "../../components/Cfd/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";
import { getContent } from "../../redux/ducks/actions.js";
import { connect } from "react-redux";

class Cfd extends React.Component {
  async componentDidMount() {
    try {
      await this.props.getContent("CFD", this.props.currentLang, true);
      window.scroll(0, 0);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <>
        {/* <ColoredNavbar location={{ ...this.props.location }} /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Cfd);
