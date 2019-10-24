import React from "react";
// import Navbar from "../../components/Navbars/Navbar.jsx";
import Legalitas from "../../components/Legalitas/Legalitas.jsx";
import Footer from "../../components/Footers/Footer.jsx";

class LegalitasPage extends React.Component {
  state = {};
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <Legalitas />
        <Footer />
      </>
    );
  }
}

export default LegalitasPage;
