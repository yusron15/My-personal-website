// /*!

// =========================================================
// * BLK Design System PRO React - v1.0.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
// import React from "react";

// // reactstrap components
// import {
//   Button,
//   Card,
//   CardBody,
//   CardFooter,
//   CardTitle,
//   Container,
//   Carousel,
//   CarouselItem,
//   Row,
//   Col
// } from "reactstrap";

// // core components
// const cardCabang = [
//   {
//     content: (
//       <Card className="card-blog card-background" data-animation={true}>
//         <div
//           className="full-background"
//           style={{
//             backgroundImage:
//               "url(" + require("assets/img/pawel-nolbert.jpg") + ")"
//           }}
//         />
//         <CardBody>
//           <div className="content-bottom">
//             <h6 className="card-category">Benchmark Report</h6>
//             <a href="#pablo" onClick={e => e.preventDefault()}>
//               <CardTitle tag="h3">API Management</CardTitle>
//             </a>
//           </div>
//         </CardBody>
//       </Card>
//     ),
//     altText: "",
//     caption: "",
//     src: "0"
//   },
//   {
//     content: (
//       <Card className="card-blog card-background" data-animation={true}>
//         <div
//           className="full-background"
//           style={{
//             backgroundImage:
//               "url(" + require("assets/img/pawel-nolbert.jpg") + ")"
//           }}
//         />
//         <CardBody>
//           <div className="content-bottom">
//             <h6 className="card-category">Benchmark Report</h6>
//             <a href="#pablo" onClick={e => e.preventDefault()}>
//               <CardTitle tag="h3">API Management</CardTitle>
//             </a>
//           </div>
//         </CardBody>
//       </Card>
//     ),
//     altText: "",
//     caption: "",
//     src: "1"
//   }
// ];

// class Blogs extends React.Component {
//   state = {
//     carousel1Index: 0,
//     carousel2Index: 0
//   };
//   onExiting = carousel => {
//     this["carousel" + carousel + "Animating"] = true;
//   };

//   onExited = carousel => {
//     this["carousel" + carousel + "Animating"] = false;
//   };
//   next = (carousel, items) => {
//     if (this["carousel" + carousel + "Animating"]) return;
//     const nextIndex =
//       this.state["carousel" + carousel + "Index"] === items.length - 1
//         ? 0
//         : this.state["carousel" + carousel + "Index"] + 1;
//     this.setState({ ["carousel" + carousel + "Index"]: nextIndex });
//   };
//   previous = (carousel, items) => {
//     if (this["carousel" + carousel + "Animating"]) return;
//     const nextIndex =
//       this.state["carousel" + carousel + "Index"] === 0
//         ? items.length - 1
//         : this.state["carousel" + carousel + "Index"] - 1;
//     this.setState({ ["carousel" + carousel + "Index"]: nextIndex });
//   };
//   goToIndex = (newIndex, carousel) => {
//     if (this["carousel" + carousel + "Animating"]) return;
//     this.setState({ ["carousel" + carousel + "Index"]: newIndex });
//   };
//   render() {
//     return (
//       <>
//         <div className="cd-section" id="blogs">
//           {/* ********* BLOGS 1 ********* */}
//           <div className="section blogs-1" id="blogs-1">
//             <Container>
//               <Row className="align-items-center">
//                 <Col lg="6"></Col>
//                 <Col lg="6">
//                   {/* {cardCabang.map((item))}
//                   {cardCabang.map(item => {
//                     item.content;
//                   })} */}
//                   {cardCabang.map((item, key) => {
//                     return (
//                       <CarouselItem
//                         onExiting={() => this.onExiting(1)}
//                         onExited={() => this.onExited(1)}
//                         key={key}
//                       >
//                         {item.content}
//                       </CarouselItem>
//                     );
//                   })}
//                 </Col>
//               </Row>
//             </Container>
//           </div>
//           {/* ********* END BLOGS 1 ********* */}
//         </div>{" "}
//       </>
//     );
//   }
// }

// export default Blogs;

import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components
const items1 = [
  {
    content: (
      <Container>
        <Row>
          <Col className="mr-auto" md="12">
            <div className="space-100" />
            <CardTitle tag="h3">Cabang Kami</CardTitle>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </h4>
            <h3 className="text-warning">• • •</h3>
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
          <Col className="mr-auto" md="12">
            <div className="space-100" />
            <CardTitle tag="h3">Cabang Kami</CardTitle>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </h4>
            <h3 className="text-warning">• • •</h3>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "1"
  }
];

class Content extends React.Component {
  state = {
    carousel1Index: 0,
    carousel2Index: 0
  };
  onExiting = carousel => {
    this["carousel" + carousel + "Animating"] = true;
  };

  onExited = carousel => {
    this["carousel" + carousel + "Animating"] = false;
  };
  next = (carousel, items) => {
    if (this["carousel" + carousel + "Animating"]) return;
    const nextIndex =
      this.state["carousel" + carousel + "Index"] === items.length - 1
        ? 0
        : this.state["carousel" + carousel + "Index"] + 1;
    this.setState({ ["carousel" + carousel + "Index"]: nextIndex });
  };
  previous = (carousel, items) => {
    if (this["carousel" + carousel + "Animating"]) return;
    const nextIndex =
      this.state["carousel" + carousel + "Index"] === 0
        ? items.length - 1
        : this.state["carousel" + carousel + "Index"] - 1;
    this.setState({ ["carousel" + carousel + "Index"]: nextIndex });
  };
  goToIndex = (newIndex, carousel) => {
    if (this["carousel" + carousel + "Animating"]) return;
    this.setState({ ["carousel" + carousel + "Index"]: newIndex });
  };
  render() {
    return (
      <>
        <div className="cd-section" id="testimonials">
          <div className="testimonials-1" style={{ backgroundColor: "black" }}>
            <Container>
              <Row>
                <Col className="ml-auto" md="6">
                  <Container fluid>
                    <Carousel
                      activeIndex={this.state.carousel1Index}
                      next={() => this.next(1, items1)}
                      previous={() => this.previous(1, items1)}
                      className="carousel-team"
                    >
                      {items1.map((item, key) => {
                        return (
                          <CarouselItem
                            onExiting={() => this.onExiting(1)}
                            onExited={() => this.onExited(1)}
                            key={key}
                          >
                            {item.content}
                          </CarouselItem>
                        );
                      })}
                      <a
                        className="carousel-control-prev"
                        data-slide="prev"
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          this.previous(1, items1);
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
                          this.next(1, items1);
                        }}
                        role="button"
                      >
                        <i className="tim-icons icon-minimal-right" />
                        <span className="sr-only">Next</span>
                      </a>
                    </Carousel>
                  </Container>
                </Col>

                <Col>
                  <Container fluid>
                    <br />
                    <Row>
                      <Col class="flex">
                        <Card
                          className="card-blog card-background"
                          data-animation="zooming"
                        >
                          <div
                            className="full-background"
                            style={{
                              backgroundImage:
                                "url(" +
                                require("assets/img/steven-roe.jpg") +
                                ")"
                            }}
                          />
                          <CardBody>
                            <div className="content-bottom">
                              <h6 className="card-category">Research Byte</h6>
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <CardTitle tag="h3">AI at the Edge</CardTitle>
                              </a>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col class="flex">
                        <Card
                          className="card-blog card-background"
                          data-animation="zooming"
                        >
                          <div
                            className="full-background"
                            style={{
                              backgroundImage:
                                "url(" +
                                require("assets/img/noah-wetering.jpg") +
                                ")"
                            }}
                          />
                          <CardBody>
                            <div className="content-bottom">
                              <h6 className="card-category">
                                Data Virtualization
                              </h6>
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <CardTitle tag="h3">A Spectrum</CardTitle>
                              </a>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      {/* <Col lg="4">
                        <Card
                            className="card-blog card-background"
                            data-animation="zooming"
                        >
                            <div
                            className="full-background"
                            style={{
                                backgroundImage:
                                "url(" + require("assets/img/matthew-henry.jpg") + ")"
                            }}
                            />
                            <CardBody>
                            <div className="content-bottom">
                                <h6 className="card-category">New Challenges</h6>
                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                <CardTitle tag="h3">Touch on a trend</CardTitle>
                                </a>
                            </div>
                            </CardBody>
                        </Card>
                        </Col> */}
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default Content;
