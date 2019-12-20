import React from "react";
// import Navbar from "../../components/Navbars/Navbar.jsx";
import HeaderAboutUs from "../../components/TentangKami/HeaderAboutUs.jsx";
import VisiMisi from "../../components/TentangKami/VisiMisi.jsx";
import Footer from "../../components/Footers/Footer.jsx";

class TentangKami extends React.Component {
  state = {};

  componentDidMount = () => {
    window.scroll(0, 0);
  };
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

export default TentangKami;
