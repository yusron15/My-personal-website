import React from "react";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import CabangKami from "../../components/CabangKami/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";

class Cabang extends React.Component {
  state = {};
  componentDidMount = () => {
    window.scroll(0, 0);
  };
  render() {
    return (
      <>
        {/* <Navbar /> */}
        {/* <ColoredNavbar /> */}
        <CabangKami location={{ ...this.props.location }} />
        <Footer />
      </>
    );
  }
}

export default Cabang;
