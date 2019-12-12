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
  CarouselItem,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";

import "../../assets/css/main.css";
import pc from "../../assets/img/preparing-cash.png";
import pc2 from "../../assets/img/preparing-cash2.png";
import pc3 from "../../assets/img/preparing-cash3.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import prevButton from "../../assets/img/prevbutton.png";
import nextButton from "../../assets/img/nextbutton.png";
import CardNews from "./CardNews";
import NewsLetter from "../NewsLetter/NewsLetter.jsx";

const textTitle = {
  fontWeight: "bold",
  color: "white",
  fontSize: "2.5rem",
  marginTop: "20rem"
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

const items = [
  {
    content: (
      <div
        className="team-1"
        style={{
          backgroundImage:
            "url(" + require("assets/img/header-berita.png") + ")",
          backgroundSize: "cover",
          height: "70vh"
        }}
      >
        <Container>
          <Row>
            <Col md="12">
              <div style={textTitle}>
                <b>Lorem Ipsum</b>
              </div>
            </Col>
            <Col md="12">
              <div className="description" style={textDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
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
          backgroundImage:
            "url(" + require("assets/img/header-berita.png") + ")",
          backgroundSize: "cover",
          height: "70vh"
        }}
      >
        <Container>
          <Row>
            <Col md="12">
              <div style={textTitle}>
                <b>Lorem Ipsum</b>
              </div>
            </Col>
            <Col md="12">
              <div className="description" style={textDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
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
          backgroundImage:
            "url(" + require("assets/img/header-berita.png") + ")",
          backgroundSize: "cover",
          height: "70vh"
        }}
      >
        <Container>
          <Row>
            <Col md="12">
              <div style={textTitle}>
                <b>Lorem Ipsum</b>
              </div>
            </Col>
            <Col md="12">
              <div className="description" style={textDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
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

class Carding extends React.Component {
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
        <div
          className="cd-section broken-white"
          id="teams"
          // style={{ backgroundColor: "#D4D4D4" }}
        >
          {/* ********* TEAM 2 ********* */}
          {/* <BlurryNavbar /> */}
          <div className="team-2">
            <div>
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

                    <Col
                      sm="12"
                      style={{
                        position: "absolute",
                        paddingLeft: "80%",
                        bottom: "8%"
                      }}
                    >
                      <img
                        src={prevButton}
                        className="slick-prev slick-arrow"
                        data-slide="prev"
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          this.previous();
                        }}
                        style={{ height: "30px", width: "auto" }}
                        // style={{ backgroundColor: "white" }}

                        // <i className="tim-icons icon-minimal-left" />
                      />
                      <img
                        src={nextButton}
                        className="slick-arrow"
                        data-slide="next"
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          this.next();
                        }}
                        style={{ height: "30px", width: "auto" }}
                        role="button"
                        // style={{ backgroundColor: "white" }}

                        // <i className="tim-icons icon-minimal-right" />
                      />
                    </Col>
                  </Carousel>
                </Row>
              </Container>
            </div>
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title font-black">Market Outlook</h2>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <CardNews
                    title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                    image={pc}
                    person="person"
                    date="dd/mm/yyyy"
                  />
                </Col>
                <Col md="4">
                  <CardNews
                    title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                    image={pc2}
                    person="person"
                    date="dd/mm/yyyy"
                  />
                </Col>
                <Col md="4">
                  <CardNews
                    title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                    image={pc3}
                    person="person"
                    date="dd/mm/yyyy"
                  />
                </Col>
                <Col md="4">
                  <CardNews
                    title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                    image={pc}
                    person="person"
                    date="dd/mm/yyyy"
                  />
                </Col>
                <Col md="4">
                  <CardNews
                    title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                    image={pc2}
                    person="person"
                    date="dd/mm/yyyy"
                  />
                </Col>
                <Col md="4">
                  <CardNews
                    title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                    image={pc3}
                    person="person"
                    date="dd/mm/yyyy"
                  />
                </Col>
              </Row>
            </Container>
          </div>
          <NewsLetter />
          {/* ********* END TEAM 2 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Carding;
