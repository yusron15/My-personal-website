import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import { LangContext } from "../MyContext";
import { Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";

// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

// reactstrap components
import {
  Alert,
  Badge,
  Button,
  CardBody,
  FormGroup,
  Form,
  Input,
  FormFeedback,
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
import phone from "../../assets/img/phoneicon.png";


import map from "../../assets/img/map-contact.png";
import ScrollAnimation from "react-animate-on-scroll";

import { connect } from "react-redux";
import { postKontak } from "../../redux/ducks/actions.js";

import { DebugFormik } from "../../utils/DebugFormik";

import "../../assets/css/main.css";

const MapWithAMarker = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: -6.210741, lng: 106.81889 }}
  >
    <Marker position={{ lat: -6.210741, lng: 106.81889 }} />
  </GoogleMap>
));

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
class Content extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: ""
    },
    showAlert: false
  };

  validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Nama depan tidak boleh kosong"),
    email: Yup.string()
      .email("Email tidak valid")
      .required("Email tidak boleh kosong"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Nomor Handphone tidak valid")
      .required("Nomor Handphone tidak boleh kosong"),
    message: Yup.string().required("Pesan tidak boleh kosong")
  });

  async componentDidMount() {
    // await this.props.getContent("hubungikami", this.props.currentLang, true);
    // document.documentElement.scrollTop = 0;
    // document.scrollingElement.scrollTop = 0;
    // this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("contact-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("contact-page");
  }

  alertNotification = () => {
    this.setState({
      showAlert: true
    });
    setTimeout(
      function() {
        this.setState({
          showAlert: false
        });
      }.bind(this),
      3000
    );
  };

  handleTextChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async (values, actions) => {
    try {
      await actions.setSubmitting(true);

      await this.props.postKontak(values);
      await actions.resetForm({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: ""
      });
      await this.alertNotification();

      await actions.setSubmitting(false);
    } catch (error) {
      console.log(error);
    }
  };

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
                  <h4 className="desc">
                    <p className="font-black">
                      {this.props.pageStore.hubungikami.top.subtitle}
                    </p>
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
                      <Formik
                        initialValues={{
                          firstName: "",
                          lastName: "",
                          email: "",
                          phoneNumber: "",
                          message: ""
                        }}
                        validationSchema={this.validationSchema}
                        onSubmit={this.handleSubmit}
                        validateOnChange={false}
                        enableReinitialize
                      >
                        {prop => {
                          return (
                            <Form
                              className="p-3"
                              id="contact-form"
                              method="post"
                              role="form"
                            >
                              <CardBody>
                                <Row>
                                  <Col md="6">
                                    <FormGroup invalid>
                                      <InputGroup
                                        className={classnames({
                                          "input-group-error": this.state
                                            .firstNameFocus
                                        })}
                                      >
                                        <InputGroupAddon addonType="prepend">
                                          <InputGroupText
                                            style={{
                                              borderColor: prop.errors.firstName
                                                ? "#ff8d72"
                                                : ""
                                            }}
                                          >
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
                                          invalid={prop.errors.firstName}
                                          aria-label="First Name..."
                                          style={{ color: "black" }}
                                          name="firstName"
                                          value={prop.values.firstName}
                                          placeholder={
                                            this.props.pageStore.hubungikami
                                              .form[0].firstname
                                          }
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
                                          onChange={prop.handleChange}
                                        />
                                      </InputGroup>
                                      {prop.errors.firstName && (
                                        <FormFeedback
                                          invalid
                                          style={{ display: "flex" }}
                                        >
                                          {prop.errors.firstName}
                                        </FormFeedback>
                                      )}
                                    </FormGroup>
                                  </Col>
                                  <Col md="6">
                                    <FormGroup>
                                      <InputGroup
                                        className={classnames({
                                          "input-group-focus": this.state
                                            .lastNameFocus
                                        })}
                                      >
                                        <InputGroupAddon addonType="prepend">
                                          <InputGroupText
                                            style={{
                                              borderColor: prop.errors.lastName
                                                ? "#ff8d72"
                                                : ""
                                            }}
                                          >
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
                                          invalid={prop.errors.lastName}
                                          name="lastName"
                                          value={prop.values.lastName}
                                          style={{ color: "black" }}
                                          aria-label="Last Name..."
                                          placeholder={
                                            this.props.pageStore.hubungikami
                                              .form[0].lastname
                                          }
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
                                          onChange={prop.handleChange}
                                        />
                                      </InputGroup>
                                      {prop.errors.lastName && (
                                        <FormFeedback
                                          invalid
                                          style={{ display: "flex" }}
                                        >
                                          {prop.errors.lastName}
                                        </FormFeedback>
                                      )}
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <FormGroup>
                                  <InputGroup
                                    className={classnames({
                                      "input-group-focus": this.state.emailFocus
                                    })}
                                  >
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText
                                        style={{
                                          borderColor: prop.errors.email
                                            ? "#ff8d72"
                                            : ""
                                        }}
                                      >
                                        <img
                                          src={subscribe}
                                          style={{
                                            height: "15px",
                                            width: "auto"
                                          }}
                                        />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                      style={{ color: "black" }}
                                      // placeholder={
                                      //   this.props.pageStore.hubungikami.form
                                      //     .emailaddress
                                      // }
                                      value={prop.values.email}
                                      invalid={prop.errors.email}
                                      onChange={this.handleTextChange}
                                      name="email"
                                      placeholder={
                                        this.props.pageStore.hubungikami.form[0]
                                          .emailaddress
                                      }
                                      onChange={prop.handleChange}
                                      type="text"
                                      onFocus={e =>
                                        this.setState({ emailFocus: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ emailFocus: false })
                                      }
                                    />
                                  </InputGroup>
                                  {prop.errors.email && (
                                    <FormFeedback
                                      invalid
                                      style={{ display: "flex" }}
                                    >
                                      {prop.errors.email}
                                    </FormFeedback>
                                  )}
                                </FormGroup>
                                <FormGroup>
                                  <InputGroup
                                    className={classnames({
                                      "input-group-focus": this.state.phoneFocus
                                    })}
                                  >
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText
                                        style={{
                                          borderColor: prop.errors.phoneNumber
                                            ? "#ff8d72"
                                            : ""
                                        }}
                                      >
                                        <img
                                          src={phone}
                                          style={{
                                            height: "15px",
                                            width: "auto"
                                          }}
                                        />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                      invalid={prop.errors.phoneNumber}
                                      style={{ color: "black" }}
                                      placeholder={
                                        this.props.pageStore.hubungikami.form[0]
                                          .phoneNumber
                                      }
                                      value={prop.values.phoneNumber}
                                      onChange={this.handleTextChange}
                                      name="phoneNumber"
                                      type="text"
                                      onChange={prop.handleChange}
                                      onFocus={e =>
                                        this.setState({ phoneFocus: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ phoneFocus: false })
                                      }
                                    />
                                  </InputGroup>
                                  {prop.errors.phoneNumber && (
                                    <FormFeedback
                                      invalid
                                      style={{ display: "flex" }}
                                    >
                                      {prop.errors.phoneNumber}
                                    </FormFeedback>
                                  )}
                                </FormGroup>
                                <FormGroup>
                                  <Input
                                    invalid={prop.errors.message}
                                    style={{ color: "black" }}
                                    id="message"
                                    name="message"
                                    value={prop.values.message}
                                    onChange={prop.handleChange}
                                    placeholder={
                                      this.props.pageStore.hubungikami.form[0]
                                        .yourmessage
                                    }
                                    rows="6"
                                    type="textarea"
                                  />
                                </FormGroup>
                                {prop.errors.message && (
                                  <FormFeedback
                                    invalid
                                    style={{ display: "flex" }}
                                  >
                                    {prop.errors.message}
                                  </FormFeedback>
                                )}
                                <Row>
                                  <Col className="ml-auto" md="6">
                                    {this.state.showAlert === true ? (
                                      <Alert color="success">
                                        {this.props.currentLang === "ID"
                                          ? "Pesan Terkirim"
                                          : "Message sent!"}
                                      </Alert>
                                    ) : null}
                                    <Button
                                      className="btn-round pull-right"
                                      color="info"
                                      // onClick={async () => {
                                      //   try {
                                      //     // await this.props.postKontak(
                                      //     //   this.state.form
                                      //     // );

                                      //     console.log(
                                      //       this.state.form,
                                      //       "this.state.form"
                                      //     );
                                      //     await this.alertNotification();
                                      //   } catch (error) {
                                      //     console.log(error);
                                      //   }
                                      // }}
                                      onClick={prop.handleSubmit}
                                    >
                                      {
                                        this.props.pageStore.hubungikami.form[0]
                                          .button
                                      }
                                    </Button>
                                  </Col>
                                </Row>
                              </CardBody>
                              {/* <DebugFormik /> */}
                            </Form>
                          );
                        }}
                      </Formik>
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
    );
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore,
  currentLang: state.pageStore.currentLang
});

const mapDispatchToProps = dispatch => ({
  postKontak: data => dispatch(postKontak(data))
  // getContent: (section, lang) => dispatch(getContent(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
