import React from "react";
import Footer from "../../components/Footers/Footer.jsx";
import Content from "../../components/Karir/Content.jsx";
class Karir extends React.Component {
  state = {};
  componentDidMount = () => {
    window.scroll(0, 0);
  };
  render() {
    return (
      <>
        <Content />
        <Footer />
      </>
    );
  }
}

export default Karir;
