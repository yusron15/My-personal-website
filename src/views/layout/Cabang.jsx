import React from "react";
import Navbar from "../../components/Navbars/Navbar.jsx";
import CabangKami from "../../components/CabangKami/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";

class Cabang extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <CabangKami />
        <Footer />
      </>
    );
  }
}

export default Cabang;
