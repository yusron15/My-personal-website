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

import { Link } from "react-router-dom";

// import { NewsContent } from "./NewsContent";

import work from "assets/img/news1.png";

import "../../assets/css/main.css";

import prevButton from "../../assets/img/prevbutton.png";
import nextButton from "../../assets/img/nextbutton.png";
import leftButton from "../../assets/img/blue-right.png";
import rightButton from "../../assets/img/blue-left.png";

const PrevButton = props => {
  return (
    <img
      className="btn-round slick-prev slick-arrow prev-btn"
      aria-label="Previous"
      onClick={props.onClick}
      src={rightButton}
      style={{
        height: "50px",
        width: "auto",
        justifyContent: "right",
        paddingLeft: "18%",
        marginBottom: "20px"
      }}
    />
  );
};
// custom next button for the slick component
const NextButton = props => {
  return (
    <img
      className="btn-round slick-arrow next-btn"
      // aria-label="Next"
      onClick={props.onClick}
      src={leftButton}
      style={{
        height: "50px",
        width: "auto" /* left: 30px; */,
        paddingLeft: "20%",
        justifyContent: "right",
        zIndex: "999",
        marginBottom: "20px"
      }}
    />
  );
};

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
            style={{ backgroundColor: "#1D1E1F", padding: "20px 15vw 0 0" }}
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
                        className={this.state.activeSlide === 3 ? "scaled" : ""}
                        style={styleCard}
                      ></NavLink>
                    </div>
                    <div>
                      <NavLink
                        className={this.state.activeSlide === 4 ? "scaled" : ""}
                        style={styleCard}
                      ></NavLink>
                    </div>
                  </Slick>
                </Col>
                <Col
                  md="6"
                  className="positioned-text-right"
                  style={{ padding: "10vh 20vw 0 0" }}
                >
                  <h1 className="title">Analisa Harian</h1>
                  <p
                    className="description text-white"
                    style={{ minHeight: "20vh" }}
                  >
                    <TabContent activeTab={"project" + this.state.activeSlide}>
                      <TabPane tabId="project0">
                        {/* <Col> */}
                        <p className="description mb-5">
                          Pasangan mata uang USDCHF terus naik setelah awal sesi
                          Amerika kemarin dan terus memuncak pada 0,9934, level
                          tertinggi sejak Rabu lalu.
                        </p>
                        {/* </Col> */}
                      </TabPane>
                      <TabPane tabId="project1">
                        <Col>
                          <p className="description mb-5">
                            Add your information here for News 1.
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project2">
                        <Col>
                          <p className="description mb-5">
                            Add your information here for News 2.
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project3">
                        <Col>
                          <p className="description mb-5">
                            Add your information here for News 3.
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project4">
                        <Col>
                          <p className="description mb-5">
                            Add your information here for News 4.
                          </p>
                        </Col>
                      </TabPane>
                    </TabContent>
                  </p>
                  <Link to="/newspage">
                    <button className="filled-button">Explore →</button>
                  </Link>
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

// const PrevButton = props => {
//   return (
//     <Button
//       className="btn-round btn-icon btn-simple slick-prev slick-arrow bg-white"
//       // color="primary"
//       aria-label="Previous"
//       type="button"
//       // md={{ size: 6, offset: 10 }}
//       onClick={props.onClick}
//       style={{ marginTop: "50px" }}
//     >
//       <i className="tim-icons icon-minimal-left" />
//     </Button>
//   );
// };
// // custom next button for the slick component
// const NextButton = props => {
//   return (
//     <Button
//       className="btn-round btn-icon btn-simple slick-arrow bg-white"
//       // color="primary"
//       // md={{ size: 6, offset: 10 }}
//       aria-label="Next"
//       type="button"
//       style={{ marginTop: "50px" }}
//     >
//       <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
//     </Button>
//   );
// };
