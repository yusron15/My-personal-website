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

// images
import Benefit from "../../assets/img/benefit.png";

// core components
const items1 = [
  {
    content: (
      <Container>
        <Row>
          <Col className="mr-auto" md="5">
            <div className="space-100" />
            <CardTitle tag="h3">Isaac Hunter</CardTitle>
            <h3 className="text-warning">• • •</h3>
            <h4 className="description">
              Take up one idea. Make that one idea your life - think of it,
              dream of it, live on that idea. Let the brain, muscles, nerves,
              every part of your body, be full of that idea, and just leave
              every other idea alone. This is the way to success. A single rose
              can be my garden... a single friend, my world.
            </h4>
            <Button
              color="warning"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Read more
            </Button>
          </Col>
          <Col className="ml-auto" md="6">
            <img
              alt="..."
              className="d-block"
              src={require("assets/img/lucy.jpg")}
            />
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
          <Col className="mr-auto" md="5">
            <div className="space-100" />
            <CardTitle tag="h3">Isaac Hunter</CardTitle>
            <h3 className="text-warning">• • •</h3>
            <h4 className="description">
              Take up one idea. Make that one idea your life - think of it,
              dream of it, live on that idea. Let the brain, muscles, nerves,
              every part of your body, be full of that idea, and just leave
              every other idea alone. This is the way to success. A single rose
              can be my garden... a single friend, my world.
            </h4>
            <Button
              color="warning"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Read more
            </Button>
          </Col>
          <Col className="ml-auto" md="6">
            <img
              alt="..."
              className="d-block"
              src={require("assets/img/tom-klein.jpg")}
            />
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "1"
  }
];

const items2 = [
  {
    content: (
      <div className="info info-primary">
        <div className="card-avatar">
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={require("assets/img/michael.jpg")}
            />
          </a>
        </div>
        <h4 className="info-title">Best Quality</h4>
        <p className="description">
          Gain access to the demographics, psychographics, and location of
          unique people.
        </p>
      </div>
    ),
    altText: "",
    caption: "",
    src: "0"
  },
  {
    content: (
      <div className="info info-warning">
        <div className="card-avatar">
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={require("assets/img/olivia.jpg")}
            />
          </a>
        </div>
        <h4 className="info-title">Best Quality</h4>
        <p className="description">
          Gain access to the demographics, psychographics, and location of
          unique people.
        </p>
      </div>
    ),
    altText: "",
    caption: "",
    src: "1"
  }
];

// custom previous button for the slick component
const PrevButton = props => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-prev slick-arrow"
      color="primary"
      aria-label="Previous"
      type="button"
      onClick={props.onClick}
    >
      <i className="tim-icons icon-minimal-left" />
    </Button>
  );
};
// custom next button for the slick component
const NextButton = props => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-next slick-arrow"
      color="primary"
      aria-label="Next"
      type="button"
    >
      <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
    </Button>
  );
};

let slickSettings = {
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 4,
  slidesToScroll: 1,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
};

class Testimonials extends React.Component {
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
          {/* ********* TESTIMONIALS 4 ********* */}
          <div className="testimonials-4" style={{backgroundImage: `url(${Benefit})`, backgroundSize:"cover"}}>
            <Container fluid>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                  <h2 className="title">Kenapa bertransaksi di Topgrowth Futures.</h2>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Slick {...slickSettings}>
                    <div>
                      <div className="info text-left">
                        <p className="description text-white">
                          {`"Take up one idea. Make that one idea your life"`}
                        </p>
                        <div className="author">
                          <Button
                            className="btn-round ml-1"
                            color="info"
                            type="button"
                          >
                            Round
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="info text-left">
                        <p className="description text-white">
                          {`"Take up one idea. Make that one idea your life"`}
                        </p>
                        <div className="author">
                          <Button
                            className="btn-round ml-1"
                            color="info"
                            type="button"
                          >
                            Round
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="info text-left">
                        <p className="description text-white">
                          {`"Take up one idea. Make that one idea your life"`}
                        </p>
                        <div className="author">
                          <Button
                            className="btn-round ml-1"
                            color="info"
                            type="button"
                          >
                            Round
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="info text-left">
                        <p className="description text-white">
                          {`"Take up one idea. Make that one idea your life"`}
                        </p>
                        <div className="author">
                          <Button
                            className="btn-round ml-1"
                            color="info"
                            type="button"
                          >
                            Round
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="info text-left">
                        <p className="description text-white">
                          {`"Take up one idea. Make that one idea your life"`}
                        </p>
                        <div className="author">
                          <Button
                            className="btn-round ml-1"
                            color="info"
                            type="button"
                          >
                            Round
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Slick>
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

export default Testimonials;
