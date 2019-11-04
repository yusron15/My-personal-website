import React from "react";
import Navbar from "../../components/Navbars/Navbar.jsx";
import Carding from "../../components/NewsPage/Carding.jsx";
import Footer from "../../components/Footers/Footer.jsx";

class NewsPage extends React.Component {
  state = {};
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <Carding />
        <Footer />
      </>
    );
  }
}

export default NewsPage;
