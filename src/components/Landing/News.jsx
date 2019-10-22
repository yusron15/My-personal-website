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

// core components
const items = [
  {
    content: (
      <Container>
        <Row>
        <Col md="6">
            <div className="wrapper">
              <div className="category">
                <strong>Berita Ekonomi</strong>
              </div>
              <div className="description">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art. An artist also may be defined unofficially
                as "a person who expresses him- or herself through a medium". He
                is a descriptive term applied to a person who engages in an
                activity deemed to be an art. An artist also may be defined
                unofficially as "a person who expresses him- or herself through
                a medium".
              </div>
          
            </div>
          </Col>
        <Col md="6">
        <div className="section blogs-2" id="blogs-2">
          <Container fluid>
            <Row>
              <Col lg="6">
                <Card
                  className="card-blog card-background"
                  data-animation="zooming"
                >
                  <div
                    className="full-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/steven-roe.jpg") + ")"
                    }}
                  />
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category">Research Byte</h6>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <CardTitle tag="h3">AI at the Edge</CardTitle>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6">
                <Card
                  className="card-blog card-background"
                  data-animation="zooming"
                >
                  <div
                    className="full-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/noah-wetering.jpg") + ")"
                    }}
                  />
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category">Data Virtualization</h6>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <CardTitle tag="h3">
                          A Spectrum of Approaches
                        </CardTitle>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
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
        <Col md="6">
            <div className="wrapper">
              <div className="category">
                <strong>Berita Ekonomi 2</strong>
              </div>
              <div className="description">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art. An artist also may be defined unofficially
                as "a person who expresses him- or herself through a medium". He
                is a descriptive term applied to a person who engages in an
                activity deemed to be an art. An artist also may be defined
                unofficially as "a person who expresses him- or herself through
                a medium".
              </div>
          
            </div>
          </Col>
        <Col md="6">
        <div className="section blogs-2" id="blogs-2">
          <Container fluid>
            <Row>
              <Col lg="6">
                <Card
                  className="card-blog card-background"
                  data-animation="zooming"
                >
                  <div
                    className="full-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/steven-roe.jpg") + ")"
                    }}
                  />
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category">Research Byte</h6>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <CardTitle tag="h3">AI at the Edge</CardTitle>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6">
                <Card
                  className="card-blog card-background"
                  data-animation="zooming"
                >
                  <div
                    className="full-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/noah-wetering.jpg") + ")"
                    }}
                  />
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category">Data Virtualization</h6>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <CardTitle tag="h3">
                          A Spectrum of Approaches
                        </CardTitle>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
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
      <Container>
        <Row>
        <Col md="6">
        <div className="section blogs-2" id="blogs-2">
          <Container fluid>
            <Row>
              <Col lg="6">
                <Card
                  className="card-blog card-background"
                  data-animation="zooming"
                >
                  <div
                    className="full-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/steven-roe.jpg") + ")"
                    }}
                  />
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category">Research Byte</h6>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <CardTitle tag="h3">AI at the Edge</CardTitle>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6">
                <Card
                  className="card-blog card-background"
                  data-animation="zooming"
                >
                  <div
                    className="full-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/noah-wetering.jpg") + ")"
                    }}
                  />
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category">Data Virtualization</h6>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <CardTitle tag="h3">
                          A Spectrum of Approaches
                        </CardTitle>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        </Col>
        <Col md="6">
            <div className="wrapper">
              <div className="category">
                <strong>Analisa harian</strong>
              </div>
              <div className="description">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art. An artist also may be defined unofficially
                as "a person who expresses him- or herself through a medium". He
                is a descriptive term applied to a person who engages in an
                activity deemed to be an art. An artist also may be defined
                unofficially as "a person who expresses him- or herself through
                a medium".
              </div>
          
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
        <Col md="6">
        <div className="section blogs-2" id="blogs-2">
          <Container fluid>
            <Row>
              <Col lg="6">
                <Card
                  className="card-blog card-background"
                  data-animation="zooming"
                >
                  <div
                    className="full-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/steven-roe.jpg") + ")"
                    }}
                  />
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category">Research Byte</h6>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <CardTitle tag="h3">AI at the Edge</CardTitle>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6">
                <Card
                  className="card-blog card-background"
                  data-animation="zooming"
                >
                  <div
                    className="full-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/noah-wetering.jpg") + ")"
                    }}
                  />
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category">Data Virtualization</h6>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <CardTitle tag="h3">
                          A Spectrum of Approaches
                        </CardTitle>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        </Col>
        <Col md="6">
            <div className="wrapper">
              <div className="category">
              <strong>Analisa harian</strong>
              </div>
              <div className="description">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art. An artist also may be defined unofficially
                as "a person who expresses him- or herself through a medium". He
                is a descriptive term applied to a person who engages in an
                activity deemed to be an art. An artist also may be defined
                unofficially as "a person who expresses him- or herself through
                a medium".
              </div>
          
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "1"
  }
  
];

class Teams extends React.Component {
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
          <div className="team-1" style={{backgroundColor:"black"}}>
            <Container>
              <Row>
                <Carousel
                  activeIndex={this.state.activeIndex}
                  next={this.next}
                  previous={this.previous}
                  className="carousel-team"
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
                  <a
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
                  </a>
                </Carousel>
              </Row>
            </Container>
          </div>
        </div>{" "}


        <div className="cd-section" id="teams">
          <div className="team-1" style={{backgroundColor:"black"}}>
            <Container>
              <Row>
                <Carousel
                  activeIndex={this.state.activeIndex}
                  next={this.next}
                  previous={this.previous}
                  className="carousel-team"
                >
                  {items2.map((item, key) => {
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
                  <div style={{justifyContent:"right"}}>
                    <a
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
                    </a>
                  </div>
                </Carousel>
              </Row>
            </Container>
          </div>
        </div>{" "}
      </>
    );
  }
}

export default Teams;
