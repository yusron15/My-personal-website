import React from "react";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import Content from "../../components/Gold/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";

class Gold extends React.Component {
  state = {};
  componentDidMount = () => {
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

export default Gold;
