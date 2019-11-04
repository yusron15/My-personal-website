import React from "react";
import Navbar from "../../components/Navbars/Navbar.jsx";
import Header from "../../components/Contact/Header.jsx";
import Content from "../../components/Contact/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";

class Contact extends React.Component {
  state = {};
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}

export default Contact;
