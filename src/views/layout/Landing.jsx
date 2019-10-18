import React from "react";
import HeaderLanding from "../../components/Landing/HeaderLanding.jsx";
import News from "../../components/Landing/News.jsx";
import Feature from "../../components/Landing/Feature.jsx";

class Landing extends React.Component {
  state = {};
  render() {
    return (
      <>
        <HeaderLanding />
        <News />
        <Feature />
      </>
    );
  }
}

export default Landing;
