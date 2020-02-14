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
import subscribe from "../../assets/img/black-icon-email.png";
import texticon from "../../assets/img/text-icon.png";

import map from "../../assets/img/map-contact.png";
import ScrollAnimation from "react-animate-on-scroll";

import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";

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
  async componentDidMount() {
    // await this.props.getContent("hubungikami", this.props.currentLang, true);
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
                  <h3 className="title font-black">
                    {this.props.pageStore.hubungikami.top.title}
                  </h3>
                  <h4 className="desc font-black">
                    {this.props.pageStore.hubungikami.top.subtitle}
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" md="9">
                  <Row>
                    <Col className="ml-auto" md="6">
                      <Container>
                        <h3
                          className=" font-black "
                          // style={{ fontSize: "1.5rem" }}
                        >
                          {this.props.pageStore.hubungikami.contact.title}
                        </h3>
                        <Row>
                          <Col>
                            <div className="description font-black desc-text">
                              {this.props.pageStore.hubungikami.contact.left[0]}
                              <br />
                              {this.props.pageStore.hubungikami.contact.left[1]}
                              <br />
                              {this.props.pageStore.hubungikami.contact.left[2]}
                              <br />
                              {this.props.pageStore.hubungikami.contact.left[3]}
                              <br />
                              <br />
                            </div>
                          </Col>
                          <Col>
                            <div className="description font-black desc-text">
                              {this.props.pageStore.hubungikami.contact.left[4]}
                            </div>
                            <div className="description font-black desc-text">
                              {this.props.pageStore.hubungikami.contact.left[5]}
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
                              <label style={{ color: "black" }}>
                                {
                                  this.props.pageStore.hubungikami.form
                                    .firstname
                                }
                              </label>
                              <InputGroup
                                className={classnames({
                                  "input-group-focus": this.state.firstNameFocus
                                })}
                              >
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <img
                                      src={texticon}
                                      style={{ height: "15px", width: "auto" }}
                                    />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  style={{ color: "black" }}
                                  aria-label="First Name..."
                                  // placeholder={
                                  //   this.props.pageStore.hubungikami.form
                                  //     .firstname
                                  // }
                                  placeholder="First Name ..."
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
                                <label style={{ color: "black" }}>
                                  {
                                    this.props.pageStore.hubungikami.form
                                      .lastname
                                  }
                                </label>
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": this.state
                                      .lastNameFocus
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <img
                                        src={texticon}
                                        style={{
                                          height: "15px",
                                          width: "auto"
                                        }}
                                      />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    style={{ color: "black" }}
                                    aria-label="Last Name..."
                                    // placeholder={
                                    //   this.props.pageStore.hubungikami.form
                                    //     .lastname
                                    // }
                                    placeholder="Last Name ..."
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
                            <label style={{ color: "black" }}>
                              {
                                this.props.pageStore.hubungikami.form
                                  .emailaddress
                              }
                            </label>
                            <InputGroup
                              className={classnames({
                                "input-group-focus": this.state.emailFocus
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <img
                                    src={subscribe}
                                    style={{ height: "15px", width: "auto" }}
                                  />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                style={{ color: "black" }}
                                // placeholder={
                                //   this.props.pageStore.hubungikami.form
                                //     .emailaddress
                                // }
                                placeholder="Email..."
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
                            <label style={{ color: "black" }}>
                              {
                                this.props.pageStore.hubungikami.form
                                  .emailaddress
                              }
                            </label>
                            <InputGroup
                              className={classnames({
                                "input-group-focus": this.state.emailFocus
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <img
                                    src={subscribe}
                                    style={{ height: "15px", width: "auto" }}
                                  />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                style={{ color: "black" }}
                                placeholder="Phone..."
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
                            <label style={{ color: "black" }}>
                              {
                                this.props.pageStore.hubungikami.form
                                  .yourmessage
                              }
                            </label>
                            <Input
                              style={{ color: "black" }}
                              id="message"
                              name="message"
                              placeholder="message"
                              rows="6"
                              type="textarea"
                            />
                          </FormGroup>
                          <Row>
                            <Col className="ml-auto" md="6">
                              <Button
                                className="btn-round pull-right"
                                color="info"
                              >
                                {this.props.currentLang == "EN"
                                  ? "Kirim"
                                  : "Send"}
                              </Button>
                            </Col>
                          </Row>
                        </CardBody>
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col md="12" className="header-filter">
                  <MapWithAMarker
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
      //     );
      //   }}
      // </LangContext.Consumer>
    );
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  // getContent: (section, lang) => dispatch(getContent(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
