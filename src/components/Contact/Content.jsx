import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import { LangContext } from "../MyContext";

// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

// reactstrap components
import {
  Badge,
  Button,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.jsx";
import DemoFooter from "components/Footers/DemoFooter.jsx";

import map from "../../assets/img/map-contact.png";
import ScrollAnimation from "react-animate-on-scroll";
import "../../assets/css/main.css";

const MapWithAMarker = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: -6.210741, lng: 106.81889 }}
  >
    <Marker position={{ lat: -6.210741, lng: 106.81889 }} />
  </GoogleMap>
));

class Content extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("contact-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("contact-page");
  }
  render() {
    return (
      // <LangContext.Consumer>
      //   {({ lang }) => {
      //     return (
            <>
              <div className="wrapper" ref="wrapper">
                <div className="main broken-white">
                  <Container fluid>
                    <Row>
                      <Col className="ml-auto mr-auto text-center mt-5" md="6">
                        <h1 className="title font-black">
                          {/* {lang.hubungikami.top.title} */}Kami sangat
                          menanti pertanyaan, saran, dan kritik dari Anda.
                        </h1>
                        <h4 className="desc font-black">
                          {/* {lang.hubungikami.top.subtitle} */}]Silakan
                          hubungi atau kirimkan email ke formulir kontak dan
                          kami akan dengan senang hati membantu Anda.
                        </h4>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-auto mr-auto" md="9">
                        <Row>
                          <Col className="ml-auto" md="6">
                            <Container>
                              <div
                                className=" font-black title-text"
                                style={{ fontSize: "1.5rem" }}
                              >
                                {/* {lang.hubungikami.contact.title} */}Kontak &
                                Informasi
                              </div>
                              <Row>
                                <Col>
                                  <div className="description font-black desc-text">
                                    {/* {lang.hubungikami.contact.left[0]} */}
                                    Address:
                                    <br />
                                    Sahid Sudirman Center
                                    {/* {lang.hubungikami.contact.left[1]} */}
                                    {/* {lang.hubungikami.contact.left[2]} */}
                                    {/* {lang.hubungikami.contact.left[3]} */}
                                    {/* {lang.hubungikami.contact.left[4]} */}
                                    {/* {lang.hubungikami.contact.left[5]} */}
                                    {/* {lang.hubungikami.contact.left[6]} */}
                                    <br />
                                    Lantai 40 Jl. Jend Sudirman Kav 86
                                    {/* {lang.hubungikami.contact.left[7]} */}
                                    <br /> Jakarta 10220 Indonesia
                                    {/* {lang.hubungikami.contact.left[8]} */}
                                    <br />
                                    {/* {lang.hubungikami.contact.left[9]} */}
                                  </div>
                                </Col>
                                <Col>
                                  <div className="description font-black desc-text">
                                    {/* {lang.hubungikami.contact.left[10]} */}
                                    Phone: (+62)21 2788-9393
                                  </div>
                                  <div className="description font-black desc-text">
                                    {/* {lang.hubungikami.contact.left[11]} */}
                                    Fax: (+62)21 2788-9395
                                  </div>
                                </Col>
                              </Row>
                            </Container>
                          </Col>
                          <Col className="ml-auto" md="6">
                            <Form
                              className="p-3"
                              id="contact-form"
                              method="post"
                              role="form"
                            >
                              <CardBody>
                                <Row>
                                  <Col md="6">
                                    <label>First name</label>
                                    <InputGroup
                                      className={classnames({
                                        "input-group-focus": this.state
                                          .firstNameFocus
                                      })}
                                    >
                                      <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                          <i className="tim-icons icon-single-02" />
                                        </InputGroupText>
                                      </InputGroupAddon>
                                      <Input
                                        aria-label="First Name..."
                                        placeholder="First Name..."
                                        type="text"
                                        onFocus={e =>
                                          this.setState({
                                            firstNameFocus: true
                                          })
                                        }
                                        onBlur={e =>
                                          this.setState({
                                            firstNameFocus: false
                                          })
                                        }
                                      />
                                    </InputGroup>
                                  </Col>
                                  <Col md="6">
                                    <FormGroup>
                                      <label>Last name</label>
                                      <InputGroup
                                        className={classnames({
                                          "input-group-focus": this.state
                                            .lastNameFocus
                                        })}
                                      >
                                        <InputGroupAddon addonType="prepend">
                                          <InputGroupText>
                                            <i className="tim-icons icon-caps-small" />
                                          </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                          aria-label="Last Name..."
                                          placeholder="Last Name..."
                                          type="text"
                                          onFocus={e =>
                                            this.setState({
                                              lastNameFocus: true
                                            })
                                          }
                                          onBlur={e =>
                                            this.setState({
                                              lastNameFocus: false
                                            })
                                          }
                                        />
                                      </InputGroup>
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <FormGroup>
                                  <label>Email address</label>
                                  <InputGroup
                                    className={classnames({
                                      "input-group-focus": this.state.emailFocus
                                    })}
                                  >
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="tim-icons icon-email-85" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                      placeholder="Email Here..."
                                      type="text"
                                      onFocus={e =>
                                        this.setState({ emailFocus: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ emailFocus: false })
                                      }
                                    />
                                  </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                  <label>Your message</label>
                                  <Input
                                    id="message"
                                    name="message"
                                    rows="6"
                                    type="textarea"
                                  />
                                </FormGroup>
                                <Row>
                                  <Col className="ml-auto" md="6">
                                    <Button
                                      className="btn-round pull-right"
                                      color="info"
                                      // style={{ backgroundColor: "#3467D6" }}
                                    >
                                      Send Message
                                    </Button>
                                  </Col>
                                </Row>
                              </CardBody>
                            </Form>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {/* <hr
                style={{
                  color: "grey",
                  backgroundColor: "grey",
                  height: 0.5,
                  width: "100vw",
                  borderColor: "grey"
                }}
              /> */}
                    <Row>
                      <Col md="12" className="header-filter">
                        {/* <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut"> */}
                        {/* <img src={map} /> */}
                        <MapWithAMarker
                          containerElement={<div style={{ height: `400px` }} />}
                          mapElement={<div style={{ height: `100%` }} />}
                        />
                        {/* </ScrollAnimation> */}
                      </Col>
                    </Row>
                  </Container>
                </div>
                {/* <div className="team-1" style={{ backgroundColor: "white" }}>
            <Container>
              <div
                className="title"
                style={{ color: "black", fontSize: "1.5rem" }}
              >
                Kontak & Informasi
              </div>
              <Row>
                <Col md="4">
                  <div className="description">
                    Address: Sahid Sudirman Center, Lantai 40 Jl. Jend Sudirman
                    Kav 86 Jakarta 10220 Indonesia
                  </div>
                </Col>
                <Col md="4">
                  <div className="description">
                    Phone: (+62)21 2788-9393 Fax: (+62)21 2788-9395
                  </div>
                </Col>
              </Row>
            </Container>
          </div> */}
              </div>
            </>
      //     );
      //   }}
      // </LangContext.Consumer>
    );
  }
}

export default Content;
