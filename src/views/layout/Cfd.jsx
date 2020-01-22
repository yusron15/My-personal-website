import React from "react";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import Content from "../../components/Cfd/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";
import { getContent } from "../../redux/ducks/actions.js";
import { connect } from "react-redux";

class Cfd extends React.Component {
  state = {};
  async componentDidMount() {
    await this.props.getContent("CFD", "id");
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
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  getContent: (section, lang) => dispatch(getContent(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cfd);
