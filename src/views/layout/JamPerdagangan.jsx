import React from "react";
import Footer from "../../components/Footers/Footer.jsx";
import Content from "../../components/JamPerdagangan/Content.jsx";
class JamPerdagangan extends React.Component {
  state = {};
  componentDidMount = () => {
    window.scroll(0, 0);
  };
  render() {
    return (
      <>
        <Content location={{ ...this.props.location }} />
        <Footer />
      </>
    );
  }
}

export default JamPerdagangan;
