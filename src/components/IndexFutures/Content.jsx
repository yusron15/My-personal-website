/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Carousel,
  CarouselItem
} from "reactstrap";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import bg1 from "../../assets/img/indexfutures1.png";
import prevButton from "../../assets/img/prevbutton.png";
import nextButton from "../../assets/img/nextbutton.png";

const textTitle = {
  fontWeight: "bold",
  color: "white",
  fontSize: "2.5rem"
};

const textSubtitle = {
  fontWeight: "bold",
  color: "white",
  fontSize: "1.5rem"
};

const textDesc = {
  color: "white",
  fontSize: "1rem"
};

// core components
const items = [
  {
    content: (
      <div
        className="team-1"
        style={{
          backgroundImage: "url(" + require("assets/img/coin.png") + ")",
          backgroundSize: "cover"
        }}
      >
        <Container>
          <Row>
            <Col md="12">
              <div style={textTitle}>
                <b>BEBERAPA RAGAM INDEKS FUTURES</b>
              </div>
              <div style={textSubtitle}>
                <b>INDEKS BERJANGKA JEPANG (NIKKEI 225)</b>
              </div>
            </Col>
            <Col md="12">
              <div className="description" style={textDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.{" "}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    ),
    altText: "",
    caption: "",
    src: "0"
  },
  {
    content: (
      <div
        className="team-1"
        style={{
          backgroundImage: "url(" + require("assets/img/business.png") + ")",
          backgroundSize: "cover"
        }}
      >
        <Container>
          <Row>
            <Col md="12">
              <div style={textTitle}>
                <b>BEBERAPA RAGAM INDEKS FUTURES</b>
              </div>
              <div style={textSubtitle}>
                <b>INDEKS BERJANGKA HONGKONG (HANGSENG))</b>
              </div>
            </Col>
            <Col md="12">
              <div className="description" style={textDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.{" "}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    ),
    altText: "",
    caption: "",
    src: "1"
  },
  {
    content: (
      <div
        className="team-1"
        style={{
          backgroundImage: "url(" + require("assets/img/social.png") + ")",
          backgroundSize: "cover"
        }}
      >
        <Container>
          <Row>
            <Col md="12">
              <div style={textTitle}>
                <b>BEBERAPA RAGAM INDEKS FUTURES</b>
              </div>
              <div style={textSubtitle}>
                <b>INDEKS BERJANGKA JEPANG (NIKKEI 225)</b>
              </div>
            </Col>
            <Col md="12">
              <div className="description" style={textDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.{" "}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    ),
    altText: "",
    caption: "",
    src: "2"
  }
];

const font = {
  //   color: "black",
  textAlign: "left"
};

class Content extends React.Component {
  state = {
    activeIndex: 0
  };
  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };
  render() {
    return (
      <>
        <div className="cd-section" id="teams">
          {/* ********* TEAM 1 ********* */}
          <ColoredNavbar />
          <div className="team-1" style={{ backgroundColor: "#1D1E1F" }}>
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="12">
                  <h1 className="title" style={font}>
                    INDEX FUTURES
                  </h1>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div>
            <Carousel
              activeIndex={this.state.activeIndex}
              next={this.next}
              previous={this.previous}
              //   className="carousel-team"
            >
              {items.map((item, key) => {
                return (
                  <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={key}
                  >
                    {item.content}
                  </CarouselItem>
                );
              })}

              {/* <Col
                sm="12"
                //  md={{ size: 6, offset: 10 }}
              > */}
              <div style={{ position: "absolute", left: "80%", top: "350px" }}>
                {/* <Button
                  className="btn-round btn-icon btn-simple slick-prev slick-arrow"
                  data-slide="prev"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    this.previous();
                  }}
                >
                  <i className="tim-icons icon-minimal-left" />
                </Button> */}

                <img
                  className="slick-prev slick-arrow"
                  data-slide="prev"
                  src={prevButton}
                  onClick={e => {
                    e.preventDefault();
                    this.previous();
                  }}
                  style={{ height: "30px", width: "auto" }}
                />
                <img
                  className="slick-arrow"
                  src={nextButton}
                  onClick={e => {
                    e.preventDefault();
                    this.next();
                  }}
                  style={{ height: "30px", width: "auto" }}
                />
                {/* <Button
                  className="btn-round btn-icon btn-simple slick-arrow"
                  data-slide="next"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    this.next();
                  }}
                  role="button"
                >
                  <i className="tim-icons icon-minimal-right" />
                </Button> */}
              </div>
              {/* </Col> */}
            </Carousel>
          </div>
          {/* ********* END TEAM 1 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Content;
