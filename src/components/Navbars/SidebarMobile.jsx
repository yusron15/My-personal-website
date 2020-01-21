import React from "react";
import { slideInDown } from "react-animations";
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
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Dropdown
} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { isMobile } from "react-device-detect";
import Sidebar from "react-sidebar";
// import { Accordion, AccordionPanel, styles } from "react-accordion";
import DropdownTentangKami from "../DropdownContent/DropdownTentangKami";
import DropdownTrading from "../DropdownContent/DropdownTrading";
import DropdownBerita from "../DropdownContent/DropdownBerita";
import { LangContext } from "../MyContext";
import Collapsible from "react-collapsible";
import logo from "../../assets/img/logo-topgrowth.png";
import BurgerIcon from "../../assets/img/burger-icon.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import BlurryNavbarHome from "../../components/Navbars/BlurryNavbarHome";
import "../../assets/css/main.css";
import Radium, { StyleRoot } from "radium";
import vl from "../../assets/img/vertical-line.png";

import { connect } from "react-redux";
import { fetchPage } from "../../redux/ducks/actions.js";

const title = {
  fontSize: "15px",
  fontWeight: "bold",
  color: "black",
  marginTop: "15px",
  marginLeft: "15px"
};

const subText = {
  fontSize: "15px",
  margin: "10px 0 10px 20px",
  color: "black"
};

const textTrigger = {
  color: "black",
  fontSize: "1rem",
  marginLeft: "17px"
};

class SidebarMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      dropdownOpen: false
    };
  }

  async componentDidMount() {
    await this.props.fetchPage("landing", "id");
  }

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open });
  };

  render() {
    const styles = {
      containerStyle: {
        marginTop: this.state.marginTop,
        bgButton: this.state.bgButton,
        fontBold: this.state.fontBold,
        zIndex: 999
      },
      colorStyle: {
        color: this.props.navbarColor == "white" ? "black" : "white"
        // color: this.state.color
      }
    };
    const { containerStyle, colorStyle } = styles;
    return (
      <>
        <Navbar
          className="broken-white"
          expand="lg"
          style={{
            height: "80px",
            position: "fixed"
          }}
        >
          <Container>
            <Row>
              <Col>
                <img src={logo} />
              </Col>
              <Col>
                <div
                  onClick={() => this.onSetSidebarOpen(true)}
                  className="vertical-center"
                >
                  <img
                    src={BurgerIcon}
                    style={{
                      height: "25px",
                      width: "auto",
                      marginLeft: "35vw"
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Navbar>
        <Sidebar
          touchHandleWidth
          pullRight={true}
          sidebar={
            <Col>
              <div style={{ marginTop: "20px" }}>
                <Link to="/landing">
                  <div className="dropdown dropbtn font-black">
                    {this.props.pageStore.Header.m1.title}
                  </div>
                </Link>
              </div>
              {/* TENTANG KAMI */}
              <div>
                <Collapsible
                  trigger={this.props.pageStore.Header.m2.title}
                  triggerStyle={textTrigger}
                >
                  <Link to="/tentang-kami">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m2.dropdown[0].title}
                    </div>
                  </Link>
                  <Link to="/cabang">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m2.dropdown[1].title}
                    </div>
                  </Link>
                  <Link to="/rekeing-terpisah">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m2.dropdown[2].title}
                    </div>
                  </Link>
                  <Link to="/legalitas">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m2.dropdown[3].title}
                    </div>
                  </Link>
                </Collapsible>
              </div>
              {/* TRADING ONLINE */}
              <div style={{ marginTop: "20px" }}>
                <Collapsible
                  trigger={this.props.pageStore.Header.m3.title}
                  triggerStyle={textTrigger}
                >
                  <div style={title}>
                    {this.props.pageStore.Header.m3.dropdown[0].title}
                  </div>
                  <Link to="/forex">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m3.dropdown[0].sub[0]}
                    </div>
                  </Link>
                  <Link to="/cfd">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m3.dropdown[0].sub[1]}
                    </div>
                  </Link>
                  <Link to="/gold">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m3.dropdown[0].sub[2]}
                    </div>
                  </Link>
                  <Link to="/komoditi">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m3.dropdown[0].sub[3]}
                    </div>
                  </Link>
                  <Link to="/index-futures">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m3.dropdown[0].sub[4]}
                    </div>
                  </Link>

                  <div style={title}>
                    {this.props.pageStore.Header.m3.dropdown[1].title}
                  </div>
                  <Link to="/jam-perdagangan">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m3.dropdown[1].sub[0]}
                    </div>
                  </Link>

                  <div style={title}>
                    {this.props.pageStore.Header.m3.dropdown[2].title}
                  </div>
                  <Link to="/pro-trader">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m3.dropdown[2].sub[0]}
                    </div>
                  </Link>
                  <Link to="/topgrowth-trader">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m3.dropdown[2].sub[1]}
                    </div>
                  </Link>

                  <div style={title}>
                    {this.props.pageStore.Header.m3.dropdown[3].title}
                  </div>
                  <Link to="/login">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m3.dropdown[3].sub[0]}
                    </div>
                  </Link>
                  <Link to="/register">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m3.dropdown[3].sub[1]}
                    </div>
                  </Link>
                </Collapsible>
              </div>
              {/* BERITA */}
              <div style={{ marginTop: "20px" }}>
                <Collapsible
                  trigger={this.props.pageStore.Header.m4.title}
                  triggerStyle={textTrigger}
                >
                  <Link to="/newspage">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m4.dropdown[0].title}
                    </div>
                  </Link>
                  <Link to="/stock-index">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m4.dropdown[1].title}
                    </div>
                  </Link>
                  <Link to="/forex-commodity">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m4.dropdown[2].title}
                    </div>
                  </Link>
                  <Link to="/economic-calendar">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m4.dropdown[3].title}
                    </div>
                  </Link>
                  <Link to="/market-outlook">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m4.dropdown[3].title}
                    </div>
                  </Link>
                  <Link to="/video-content">
                    <div style={subText}>
                      > {this.props.pageStore.Header.m4.dropdown[3].title}
                    </div>
                  </Link>
                </Collapsible>
              </div>
              <div>
                <Link to="/edukasi">
                  <div style={subText}>
                    {this.props.pageStore.Header.m5.title}
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/karir">
                  <div style={subText}>
                    {this.props.pageStore.Header.m6.title}
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/contact">
                  <div style={subText}>
                    {this.props.pageStore.Header.m7.title}
                  </div>
                </Link>
              </div>
            </Col>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{
            sidebar: {
              backgroundColor: "#fff7f7",
              width: "50vw",
              zIndex: "9999",
              position: "fixed"
            }
          }}
        ></Sidebar>
      </>
    );
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  fetchPage: (section, lang) => dispatch(fetchPage(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMobile);
