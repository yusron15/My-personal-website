import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import LangTogglerButton from "../LangTogglerButton";
import logo from "../../assets/img/Bitmap.png";
import twitter from "../../assets/img/twitter.png";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import vimeo from "../../assets/img/vimeo.png";
import subscribe from "../../assets/img/subscribe.png";
import flag from "../../assets/img/flag-uk.png";

import "../../assets/css/main.css";

import { getContent, getNews } from "../../redux/ducks/actions.js";

const font = {
  color: "white",
  cursor: "default"
};

class BlurryNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  // state = {
  //   navbarPosition: "bg-darker"
  // };
  async componentDidMount() {
    await this.props.getContent("topbar", this.props.currentLang, true);
  }

  render() {
    return (
      <>
        <Navbar
          // className={this.state.navbarPosition}
          expand="lg"
          style={{
            // backgroundColor: "rgba(112, 112, 112, 0.19)",
            // backgroundColor: "#343435",
            backgroundColor: "transparent",
            height: "50px"
          }}
        >
          <Container>
            <div className="navbar-translate">
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                <p style={font}>{this.props.pageStore.topbar.phone}</p>
              </NavbarBrand>
              {/* <button
                className="navbar-toggler"
                id="example-navbar-transparent"
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button> */}
            </div>
            <UncontrolledCollapse navbar toggler="#example-navbar-transparent">
              <Nav className="ml-auto" style={{ marginRight: "25px" }} navbar>
                <NavItem>
                  <LangTogglerButton />
                  {/* </Link> */}
                </NavItem>
                <div class="vl"></div>
                <NavItem style={{ marginTop: "5px" }}>
                  <Link to="/#" className="vertical-center-nav">
                    <img
                      src={subscribe}
                      style={{
                        paddingRight: "10px",
                        height: "14px",
                        width: "auto"
                      }}
                    />
                    <text style={font}>Subscribe</text>
                  </Link>
                </NavItem>
                <div class="vl"></div>
                <NavItem style={{ marginTop: "5px" }}>
                  <a
                    target="_blank"
                    style={{ backgroundColor: "transparent" }}
                    href={this.props.pageStore.topbar.link_1}
                  >
                    <img src={facebook} />
                  </a>
                </NavItem>
                <NavItem style={{ marginTop: "5px" }}>
                  <Link to="/#">
                    <img src={twitter} />
                  </Link>
                </NavItem>
                <NavItem style={{ marginTop: "5px" }}>
                  <Link to="/#">
                    <img src={instagram} />
                  </Link>
                </NavItem>
                <NavItem style={{ marginTop: "5px" }}>
                  <Link to="/#">
                    <img src={vimeo} />
                  </Link>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        {/* <hr
          style={{
            color: "grey",
            backgroundColor: "grey",
            height: 0.5,
            width: "100vw",
            borderColor: "grey"
          }}
        /> */}
      </>
    );
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore,
  currentLang: state.pageStore.currentLang
});

const mapDispatchToProps = dispatch => ({
  // fetchPage: (section, lang) => dispatch(fetchPage(section, lang)),
  getContent: (section, lang, toggle) =>
    dispatch(getContent(section, lang, toggle)),
  getNews: type => dispatch(getNews(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(BlurryNavbar);
