import React from "react";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import Content from "../../components/Cfd/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";

class Cfd extends React.Component {
  state = {};
  componentDidMount = () => {
    window.scroll(0, 0);
  };
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

export default Cfd;
