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
// ReactJS plugin for a nice carousel
import Slick from "react-slick";
import { useSpring, animated } from "react-spring";
import "../../assets/css/helper.css";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  TabPane,
  TabContent,
  Row,
  Col,
  NavLink,
  NavItem,
  Nav,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// import { NewsContent } from "./NewsContent";

import work from "assets/img/news1.png";

import "../../assets/css/main.css";

const styleCard = {
  backgroundImage: "url(" + require("assets/img/news1.png") + ")",
  height: "30vh",
  backgroundSize: "cover"
};

class NewsInverted extends React.Component {
  state = {
    carousel1Index: 0,
    carousel2Index: 0,
    // activeTab: "1,

    oldSlide: 0,
    activeSlide: 0,
    activeSlide2: 0
  };

  render() {
    let slickSettings = {
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: <PrevButton />,
      nextArrow: <NextButton />,
      afterChange: current => {
        this.setState({ activeSlide: current });
      },
      className: "center slider",
      slide: "section",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <>
        <div className="cd-section" id="testimonials">
          <div
            className="testimonials-4"
            style={{ backgroundColor: "#1D1E1F", padding: "20px" }}
          >
            <Container>
              <Row>
                <Col md="12" className="positioned-right">
                  <Slick {...slickSettings}>
                    <div>
                      <NavLink
                        className={this.state.activeSlide === 0 ? "scaled" : ""}
                        style={{
                          ...styleCard
                        }}
                      ></NavLink>
                    </div>

                    <div>
                      <NavLink
                        className={this.state.activeSlide === 1 ? "scaled" : ""}
                        style={{
                          ...styleCard
                        }}
                      ></NavLink>
                    </div>
                    <div>
                      <NavLink
                        className={this.state.activeSlide === 2 ? "scaled" : ""}
                        style={styleCard}
                      ></NavLink>
                    </div>
                    <div>
                      <NavLink
                        className={
                          this.state.activeSlide === "4" ? "scaled" : ""
                        }
                        style={styleCard}
                      ></NavLink>
                    </div>
                    <div>
                      <NavLink
                        className={
                          this.state.activeSlide === "5" ? "scaled" : ""
                        }
                        style={styleCard}
                      ></NavLink>
                    </div>
                  </Slick>
                </Col>
                <Col
                  md="6"
                  className="positioned-text-right"
                  style={{ padding: "10vh 15vw 0 0" }}
                >
                  <h1 className="title">Analisa Harian</h1>
                  <p className="description text-white">
                    <TabContent activeTab={"project" + this.state.activeSlide}>
                      <TabPane tabId="project0">
                        {/* <Col> */}
                        <p className="description mb-5">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                        {/* </Col> */}
                      </TabPane>
                      <TabPane tabId="project1">
                        <Col>
                          <p className="description mb-5">
                            Add your information here for News 2.
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project2">
                        <Col>
                          <p className="description mb-5">
                            Add your information here for News 3.
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project3">
                        <Col>
                          <p className="description mb-5">
                            Add your information here for News 4.
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project4">
                        <Col>
                          <p className="description mb-5">
                            Add your information here for News 5.
                          </p>
                        </Col>
                      </TabPane>
                    </TabContent>
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default NewsInverted;

const PrevButton = props => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-prev slick-arrow bg-white"
      // color="primary"
      aria-label="Previous"
      type="button"
      // md={{ size: 6, offset: 10 }}
      onClick={props.onClick}
      style={{ marginTop: "50px" }}
    >
      <i className="tim-icons icon-minimal-left" />
    </Button>
  );
};
// custom next button for the slick component
const NextButton = props => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-arrow bg-white"
      // color="primary"
      // md={{ size: 6, offset: 10 }}
      aria-label="Next"
      type="button"
      style={{ marginTop: "50px" }}
    >
      <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
    </Button>
  );
};
