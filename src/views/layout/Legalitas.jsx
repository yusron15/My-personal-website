import React from "react";
// import Navbar from "../../components/Navbars/Navbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import Content from "../../components/Legalitas/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";

class LegalitasPage extends React.Component {
  state = {};
  componentDidMount = () => {
    window.scroll(0, 0);
  };
  render() {
    return (
      <>
        {/* <Navbar /> */}
        {/* <BlurryNavbar /> */}
        <ColoredNavbar />
        <Content />
        <Footer />
      </>
    );
  }
}

export default LegalitasPage;
