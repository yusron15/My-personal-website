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

import { isMobile } from "react-device-detect";
import SidebarMobile from "components/Navbars/SidebarMobile";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import bg from "../../assets/img/header-komoditi.png";
import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import "../../assets/css/main.css";

class Headers extends React.Component {
  async componentDidMount() {
    await this.props.getContent("Komoditi", "id");
  }
  state = {};

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div
            className="team-1 background-header-mobile"
            style={{
              backgroundImage: `url(${bg})`,
              padding: 0
            }}
          >
            {/* <BlurryNavbar /> */}
            <SidebarMobile />
            <div className="title title-header-mobile">
              {ReactHtmlParser(this.props.pageStore.Komoditi.header)}
            </div>
          </div>
          <div className="header header-4 broken-white">
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
                <Container style={{ paddingTop: 0 }}>
                  <p
                    className="description font-black"
                    style={{
                      marginTop: "20px",
                      textAlign: "justify"
                    }}
                  >
                    {ReactHtmlParser(this.props.pageStore.Komoditi.top)}
                  </p>
                </Container>
              </div>
            </div>
          </div>
        </>
      );
    }
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div
                className="team-1 background-header"
                style={{
                  backgroundImage: `url(${bg})`,
                  padding: 0
                }}
              >
                <BlurryNavbar />
                <ColoredNavbar location={{ ...this.props.location }} />
                <div className="title title-header">
                  {ReactHtmlParser(this.props.pageStore.Komoditi.header)}
                </div>
              </div>
              <div className="header header-4 broken-white">
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
                    <Container style={{ paddingTop: 0 }}>
                      <p
                        className="description font-black"
                        style={{ textAlign: "justify" }}
                      >
                        {ReactHtmlParser(this.props.pageStore.Komoditi.top)}
                      </p>
                    </Container>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </LangContext.Consumer>
    );
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  getContent: (section, lang) => dispatch(getContent(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Headers);
