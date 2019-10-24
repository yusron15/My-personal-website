import React from "react";
// import Navbar from "../../components/Navbars/Navbar.jsx";
import HeaderAboutUs from "../../components/TentangKami/HeaderAboutUs.jsx";
import VisiMisi from "../../components/TentangKami/VisiMisi.jsx";
import Footer from "../../components/Footers/Footer.jsx";

class TentangKami extends React.Component {
  state = {};
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <HeaderAboutUs />
        <VisiMisi />
        <Footer />
      </>
    );
  }
}

export default TentangKami;
