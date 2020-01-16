import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// ReactJS plugin for a nice carousel
import Slick from "react-slick";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  //   Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import { LangContext } from "../MyContext";

import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import bg from "../../assets/img/header-komoditi.png";
import { connect } from "react-redux";
import { fetchPage } from "../../redux/ducks/actions.js";

import "../../assets/css/main.css";

class Headers extends React.Component {
  async componentDidMount() {
    await this.props.fetchPage("landing", "id");
  }
  state = {};
  render() {
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              {/* <div
          className="cd-section"
          id="headers"
          style={{
            backgroundImage:
              "url(" + require("assets/img/headerkomoditi.png") + ")",
            backgroundSize: "cover"
          }}
        > */}
              {/* ********* HEADER 4 w/ VIDEO ********* */}
              <div
                className="team-1 background-header"
                style={{
                  backgroundImage: `url(${bg})`,
                  padding: 0
                }}
              >
                <BlurryNavbar />

                <div className="title title-header">
                  {this.props.pageStore.Komoditi.header}
                </div>
              </div>
              <div className="header header-4 broken-white">
                {/* <ColoredNavbar /> */}
                <div className="header-wrapper">
                  <div
                    className="page-header"
                    style={{
                      justifyContent: "center",
                      minHeight: "60vh",
                      backgroundImage:
                        "url(" + require("assets/img/white-dotted.png") + ")",
                      backgroundSize: "cover"
                    }}
                  >
                    {/* <div
                style={{
                  backgroundColor: "rgba(179, 172, 172, 0.39)"
                }}
              > */}
                    <Container style={{ paddingTop: 0 }}>
                      {/* <h1 className="title text-center">KOMODITI</h1> */}
                      <p className="description" style={{ color: "black" }}>
                        {this.props.pageStore.Komoditi.top}
                      </p>
                    </Container>
                    {/* </div> */}
                  </div>
                </div>
              </div>
              {/* ********* END HEADER 4 ********* */}
              {/* </div>{" "} */}
            </>
          );
        }}
      </LangContext.Consumer>
    );
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  fetchPage: (section, lang) => dispatch(fetchPage(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Headers);
