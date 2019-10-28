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

import work from "assets/img/work.png";

const styleCard = {
  backgroundImage: "url(" + require("assets/img/work.png") + ")",
  height: "70vh",
  // width: "25vw",
  // marginRight: "50px;",
  backgroundSize: "cover"
};

// core components

// custom previous button for the slick component
const PrevButton = props => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-prev slick-arrow"
      // color="primary"
      aria-label="Previous"
      type="button"
      onClick={props.onClick}
      // style={{ backgroundColor: "white" }}
    >
      <i className="tim-icons icon-minimal-left" />
    </Button>
  );
};
// custom next button for the slick component
const NextButton = props => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-arrow"
      // color="primary"
      aria-label="Next"
      type="button"
      // style={{ backgroundColor: "white" }}
    >
      <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
    </Button>
  );
};

// onClick={this.toggle("1") + 1}

// let slickSettings = {
//   dots: false,
//   infinite: true,
//   centerMode: true,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   prevArrow: <PrevButton />,
//   nextArrow: <NextButton />,
//   className: "center slider",
//   slide: "section",
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         infinite: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// };

// console.log(NewsContent, "HAHAHAHAHAHA");
class News extends React.Component {
  state = {
    carousel1Index: 0,
    carousel2Index: 0,
    activeTab: "1",
    slickSettings: {
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      beforeChange: (oldSlide, newSlide) => {
        if (oldSlide !== newSlide) {
          this.setState({ activeTab: newSlide });
        }
      },
      prevArrow: <PrevButton />,
      nextArrow: <NextButton />,
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
    }
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  onExiting = carousel => {
    this["carousel" + carousel + "Animating"] = true;
  };

  onExited = carousel => {
    this["carousel" + carousel + "Animating"] = false;
  };
  next = (carousel, items, tab) => {
    console.log(this.state["carousel" + carousel + "Index"]);
    if (this["carousel" + carousel + "Animating"]) return;
    const nextIndex =
      this.state["carousel" + carousel + "Index"] === items.length - 1
        ? 0
        : this.state["carousel" + carousel + "Index"] + 1;
    this.setState({
      ["carousel" + carousel + "Index"]: nextIndex,
      activeTab: nextIndex
    });
  };

  previous = (carousel, items) => {
    console.log(this.state["carousel" + carousel + "Index"]);
    if (this["carousel" + carousel + "Animating"]) return;
    const nextIndex =
      this.state["carousel" + carousel + "Index"] === 0
        ? items.length - 1
        : this.state["carousel" + carousel + "Index"] - 1;
    this.setState({
      ["carousel" + carousel + "Index"]: nextIndex,
      activeTab: nextIndex
    });
  };

  goToIndex = (newIndex, carousel) => {
    console.log(this.state["carousel" + carousel + "Index"]);
    if (this["carousel" + carousel + "Animating"]) return;
    this.setState({
      ["carousel" + carousel + "Index"]: newIndex,
      activeTab: newIndex
    });
  };

  render() {
    return (
      <>
        <div className="cd-section" id="testimonials">
          {/* ********* TESTIMONIALS 4 ********* */}
          <div
            className="testimonials-4"
            style={{ backgroundColor: "black", paddingTop: 0 }}
          >
            <Container fluid>
              <Row>
                <Col md="6" style={{ padding: "15vh 0 0 5vw" }}>
                  <h1 className="title">Analisa Harian</h1>
                  <p className="description text-white">
                    <TabContent activeTab={"project" + this.state.activeTab}>
                      <TabPane tabId="project1">
                        <Col>
                          <p className="description mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
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
                      <TabPane tabId="project5">
                        <Col>
                          <p className="description mb-5">
                            Add your information here for News 5.
                          </p>
                        </Col>
                      </TabPane>
                    </TabContent>
                  </p>
                </Col>
                <Col md="6">
                  <Slick {...this.state.slickSettings}>
                    <div>
                      <NavLink
                        className={this.state.activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          this.toggle("1");
                        }}
                        style={styleCard}
                      ></NavLink>
                    </div>
                    <div>
                      <NavLink
                        className={this.state.activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          this.toggle("2");
                        }}
                        style={styleCard}
                      ></NavLink>
                    </div>
                    <div>
                      <NavLink
                        className={this.state.activeTab === "3" ? "active" : ""}
                        onClick={() => {
                          this.toggle("3");
                        }}
                        style={styleCard}
                      ></NavLink>
                    </div>
                    <div>
                      <NavLink
                        className={this.state.activeTab === "4" ? "active" : ""}
                        onClick={() => {
                          this.toggle("4");
                        }}
                        style={styleCard}
                      ></NavLink>
                    </div>
                    <div>
                      <NavLink
                        className={this.state.activeTab === "5" ? "active" : ""}
                        onClick={() => {
                          this.toggle("5");
                        }}
                        style={styleCard}
                      ></NavLink>
                    </div>{" "}
                  </Slick>
                </Col>
              </Row>
            </Container>
          </div>

          <div
            className="testimonials-4"
            style={{ backgroundColor: "black", paddingTop: 0 }}
          >
            <Container fluid>
              <Row>
                <Col md="6">
                  <Slick {...this.state.slickSettings}>
                    <div>
                      <NavLink
                        className={this.state.activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          this.toggle("1");
                        }}
                        style={styleCard}
                      ></NavLink>
                    </div>
                    <div>
                      <NavLink
                        className={this.state.activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          this.toggle("2");
                        }}
                        style={styleCard}
                      ></NavLink>
                    </div>
                    <div>
                      <NavLink
                        className={this.state.activeTab === "3" ? "active" : ""}
                        onClick={() => {
                          this.toggle("3");
                        }}
                        style={styleCard}
                      ></NavLink>
                    </div>
                    <div>
                      <NavLink
                        className={this.state.activeTab === "4" ? "active" : ""}
                        onClick={() => {
                          this.toggle("4");
                        }}
                        style={styleCard}
                      ></NavLink>
                    </div>
                    <div>
                      <NavLink
                        className={this.state.activeTab === "5" ? "active" : ""}
                        onClick={() => {
                          this.toggle("5");
                        }}
                        style={styleCard}
                      ></NavLink>
                    </div>{" "}
                  </Slick>
                </Col>
                <Col md="6">
                  <h1 className="title">Analisa Harian</h1>
                  <p className="description text-white">
                    <TabContent activeTab={"project" + this.state.activeTab}>
                      <TabPane tabId="project1">
                        <Col>
                          <p className="description mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
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
                      <TabPane tabId="project5">
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
          {/* ********* END TESTIMONIALS 4 ********* */}
        </div>
      </>
    );
  }
}

export default News;
