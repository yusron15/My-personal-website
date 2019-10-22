import React from "react";
import HeaderAboutUs from "../../components/TentangKami/HeaderAboutUs.jsx";
import VisiMisi from "../../components/TentangKami/VisiMisi.jsx";
import Footer from "../../components/Footers/Footer.jsx";

class TentangKami extends React.Component {
  state = {};
  render() {
    return (
      <>
        <HeaderAboutUs />
        <VisiMisi />
        <Footer />
      </>
    );
  }
}

export default TentangKami;
