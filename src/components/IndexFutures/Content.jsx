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
import Navbar from "../../components/Navbars/Navbar.jsx";
import bg1 from "../../assets/img/indexfutures1.png";

const textTitle = {
  fontWeight: "bold",
  //   color: "white",
  fontSize: "2.5rem"
};

const textSubtitle = {
  fontWeight: "bold",
  //   color: "white",
  fontSize: "1.5rem"
};

const textDesc = {
  //   color: "black",
  fontSize: "1rem"
};

// core components
const items = [
  {
    content: (
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
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{" "}
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "0"
  },
  {
    content: (
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
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{" "}
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "1"
  },
  {
    content: (
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
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{" "}
            </div>
          </Col>
        </Row>
      </Container>
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
          <Navbar />
          <div className="team-1" style={{ backgroundColor: "black" }}>
            <Row>
              <Col className="ml-auto mr-auto" md="9">
                <h1 className="title" style={font}>
                  INDEX FUTURES
                </h1>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.{" "}
                </p>
              </Col>
            </Row>
          </div>
          <div className="team-1" style={{ backgroundColor: "white" }}>
            <Container>
              <Row>
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
                  <Row>
                    <Col
                      sm="12"
                      md={{ size: 6, offset: 10 }}
                      style={{ marginTop: "70px" }}
                    >
                      <Button
                        className="btn-round btn-icon btn-simple slick-prev slick-arrow"
                        data-slide="prev"
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          this.previous();
                        }}
                      >
                        <i className="tim-icons icon-minimal-left" />
                      </Button>
                      <Button
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
                      </Button>
                    </Col>
                  </Row>

                  {/* <a
                    className="carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      this.previous();
                    }}
                    role="button"
                  >
                    <i className="tim-icons icon-minimal-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      this.next();
                    }}
                    role="button"
                  >
                    <i className="tim-icons icon-minimal-right" />
                    <span className="sr-only">Next</span>
                  </a> */}
                </Carousel>
              </Row>
            </Container>
          </div>
          {/* ********* END TEAM 1 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Content;
