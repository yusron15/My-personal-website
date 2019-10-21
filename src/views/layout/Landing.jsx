import React from "react";
import HeaderLanding from "../../components/Landing/HeaderLanding.jsx";
import News from "../../components/Landing/News.jsx";
import Feature from "../../components/Landing/Feature.jsx";
import Benefit from "../../components/Landing/Benefit.jsx";
import Pricing from "../../components/Landing/Pricing.jsx";
import Legality from "../../components/Landing/Legality.jsx";
import Footer from "../../components/Landing/Footer.jsx";

class Landing extends React.Component {
  state = {};
  render() {
    return (
      <>
        <HeaderLanding />
        <News />
        <Feature />
        <Benefit />
        <Pricing />
        <Legality />
        <Footer />
      </>
    );
  }
}

export default Landing;
