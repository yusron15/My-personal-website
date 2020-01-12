import React from "react";
import { slideInDown } from "react-animations";
import { Link } from "react-router-dom";
import Fade from "react-fade-opacity";
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
  UncontrolledTooltip,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Input
} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import logo from "../../assets/img/Bitmap.png";
import bg from "../../assets/img/bg-bottom-navbar.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import "../../assets/css/main.css";
import Radium, { StyleRoot } from "radium";

const stylesAnimation = {
  slideInDown: {
    animation: "x 1s",
    animationName: Radium.keyframes(slideInDown, "bounce")
  }
};

class BottomNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "",
      display: "none"
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarPosition);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarTop);
  }

  changeNavbarPosition = () => {
    if (
      document.documentElement.scrollTop > 4000 ||
      document.body.scrollTop > 4000
    ) {
      this.setState({
        position: "fixed"
        // display: "block"
      });
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        position: ""
      });
    }
  };

  render() {
    const styles = {
      containerStyle: {
        position: this.state.position,
        // maxHeight: "150px",
        backgroundImage:
          "url(" + require("assets/img/ebook-background.png") + ")"
      }
    };
    const EbookShow = this.state.position;
    return (
      // <div>
      //   {EbookShow ? (
      //     <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut">
      //       <div
      //         class="navbar-bottom"
      //         style={{
      //           backgroundImage:
      //             "url(" + require("assets/img/bg-bottom-navbar.png") + ")",
      //           position: "fixed"
      //         }}
      //       >
      //         {/* <Fade> */}
      //         <div
      //         // style={{
      //         //   backgroundImage:
      //         //     "url(" + require("assets/img/bg-bottom-navbar.png") + ")"
      //         // }}
      //         >
      //           <h4
      //             className="title"
      //             style={{
      //               textAlign: "center",
      //               fontSize: "1.5rem",
      //               color: "white"
      //             }}
      //           >
      //             Download E-Book Now
      //           </h4>
      //           <div
      //             style={{
      //               margin: "0 20px 20px 20px"
      //             }}
      //           >
      //             <Row>
      //               <Col md="3">
      //                 <Input
      //                   style={{
      //                     backgroundColor: "rgba(114, 114, 114, 0.65)",
      //                     border: "none"
      //                   }}
      //                   placeholder="Full Name"
      //                   type="text"
      //                   onFocus={e => this.setState({ emailFocus: true })}
      //                   onBlur={e => this.setState({ emailFocus: false })}
      //                 />
      //               </Col>
      //               <Col md="3">
      //                 <Input
      //                   style={{
      //                     backgroundColor: "rgba(114, 114, 114, 0.65)",
      //                     border: "none"
      //                   }}
      //                   placeholder="Email"
      //                   type="text"
      //                   onFocus={e => this.setState({ emailFocus: true })}
      //                   onBlur={e => this.setState({ emailFocus: false })}
      //                 />
      //               </Col>
      //               <Col md="1">
      //                 <Input
      //                   style={{
      //                     backgroundColor: "rgba(114, 114, 114, 0.65)",
      //                     border: "none"
      //                   }}
      //                   placeholder="Kode"
      //                   type="text"
      //                   onFocus={e => this.setState({ emailFocus: true })}
      //                   onBlur={e => this.setState({ emailFocus: false })}
      //                 />
      //               </Col>
      //               <Col md="3">
      //                 <Input
      //                   style={{
      //                     backgroundColor: "rgba(114, 114, 114, 0.65)",
      //                     border: "none"
      //                   }}
      //                   placeholder="Telepon"
      //                   type="text"
      //                   onFocus={e => this.setState({ emailFocus: true })}
      //                   onBlur={e => this.setState({ emailFocus: false })}
      //                 />
      //               </Col>
      //               <Col md="2">
      //                 <Button block color="info" type="button">
      //                   Download EBook
      //                 </Button>
      //               </Col>
      //             </Row>
      //             <Row style={{ marginLeft: "20px" }}>
      //               <Col style={{ color: "#FFFFFF" }}>
      //                 <Input type="checkbox" /> Saya setuju untuk menerima
      //                 berita dan email promosi dari Topgrowth Futures
      //               </Col>
      //               <Col style={{ color: "#FFFFFF" }}>
      //                 <Input type="checkbox" /> Saya telah membaca dan setuju
      //                 kebijakan privasi kebijakan privasi
      //               </Col>
      //             </Row>
      //           </div>
      //         </div>
      //         {/* </Fade> */}
      //       </div>
      //     </ScrollAnimation>
      //   ) : null}
      // </div>
      // <>

      // </>
      <>
        <div class="navbar-bottom" style={styles.containerStyle}>
          {/* <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut"> */}
          {/* <Fade> */}
          <div
            // style={{
            //   backgroundImage:
            //     "url(" + require("assets/img/bg-bottom-navbar.png") + ")"
            // }}
            style={{ maxHeight: "150px" }}
          >
            <div
              style={{
                margin: "10px 10px 10px 10px"
              }}
            >
              <Col className="ml-auto mr-auto" md="11">
                <Row>
                  <Col md="2">
                    <div
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: "1.2rem",
                        color: "white"
                      }}
                    >
                      Download E-Book
                    </div>
                  </Col>
                  <Col md="2">
                    <Input
                      style={{
                        backgroundColor: "rgba(114, 114, 114, 0.65)",
                        color: "white",
                        border: "none"
                      }}
                      placeholder="Full Name"
                      type="text"
                      onFocus={e => this.setState({ emailFocus: true })}
                      onBlur={e => this.setState({ emailFocus: false })}
                    />
                  </Col>
                  <Col md="2">
                    <Input
                      style={{
                        backgroundColor: "rgba(114, 114, 114, 0.65)",
                        color: "white",
                        border: "none"
                      }}
                      placeholder="Email"
                      type="text"
                      onFocus={e => this.setState({ emailFocus: true })}
                      onBlur={e => this.setState({ emailFocus: false })}
                    />
                  </Col>
                  <Col md="1">
                    <Input
                      style={{
                        backgroundColor: "rgba(114, 114, 114, 0.65)",
                        color: "white",
                        border: "none"
                      }}
                      color="white"
                      placeholder="+62"
                      type="text"
                      onFocus={e => this.setState({ emailFocus: true })}
                      onBlur={e => this.setState({ emailFocus: false })}
                    />
                  </Col>
                  <Col md="2">
                    <Input
                      style={{
                        backgroundColor: "rgba(114, 114, 114, 0.65)",
                        color: "white",
                        border: "none"
                      }}
                      placeholder="Telepon"
                      type="text"
                      onFocus={e => this.setState({ emailFocus: true })}
                      onBlur={e => this.setState({ emailFocus: false })}
                    />
                  </Col>
                  <Col md="2">
                    <Button block color="info" type="button">
                      Download EBook
                    </Button>
                  </Col>
                </Row>

                <Row style={{ marginLeft: "20px" }}>
                  <Col style={{ color: "#FFFFFF" }}>
                    <Input type="checkbox" /> Saya setuju untuk menerima berita
                    dan email promosi dari Topgrowth Futures
                  </Col>
                  <Col style={{ color: "#FFFFFF" }}>
                    <Input type="checkbox" /> Saya telah membaca dan setuju
                    kebijakan privasi kebijakan privasi
                  </Col>
                </Row>
              </Col>
            </div>
          </div>
          {/* </Fade> */}

          {/* </ScrollAnimation> */}
        </div>
      </>
    );
  }
}

export default BottomNavbar;
