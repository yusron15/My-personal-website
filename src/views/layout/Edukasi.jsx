import React from "react";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import Footer from "../../components/Footers/Footer.jsx";
import Content from "../../components/Edukasi/Content.jsx";
import { fetchPage, getContent } from "../../redux/ducks/actions.js";
import { connect } from "react-redux";
class Edukasi extends React.Component {
  state = {};
  async componentDidMount() {
    await this.props.getContent("edukasi", this.props.currentLang, true);
    window.scroll(0, 0);
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
  currentLang: state.pageStore.currentLang
});

const mapDispatchToProps = dispatch => ({
  getContent: (section, lang, toggle) =>
    dispatch(getContent(section, lang, toggle))
});

export default connect(mapStateToProps, mapDispatchToProps)(Edukasi);

// export default Edukasi
