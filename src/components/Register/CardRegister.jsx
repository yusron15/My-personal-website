import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  CarouselItem,
  UncontrolledCarousel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";
import ReactHtmlParser from "react-html-parser";

import TextField from "@material-ui/core/TextField";
import classnames from "classnames";

import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";

import "../../assets/css/main.css";

class CardRegister extends React.Component {
  async componentDidMount() {
    await this.props.getContent("register", "id");
  }

  render() {
    return (
      <>
        <Card
          style={{
            backgroundColor: "rgba(14,14,14,0.7)",
            marginTop: "65%",
            minHeight: "35vh",
            minWidth: "25vw"
          }}
        >
          <Form
            action=""
            className="form"
            method=""
            style={{ margin: "0 5% 0 0" }}
          >
            <CardHeader>
              <CardTitle
                style={{
                  textAlign: "left",
                  color: "white",
                  fontSize: "2rem",
                  marginTop: "5%",
                  fontWeight: "bold"
                }}
              >
                {/* {this.props.pageStore.register.form.title} */}
                {this.props.pageStore.Landing.HeaderLanding.SignUp[0].title}
              </CardTitle>
            </CardHeader>
            <CardBody>
              {/* <Row>
                <Col md="12">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText style={{ borderColor: "#FFFFFF" }}>
                          <i className="tim-icons icon-caps-small" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        style={{ borderColor: "#FFFFFF" }}
                        placeholder={
                          this.props.pageStore.register.form.fullname
                        }
                        type="text"
                        onFocus={e => this.setState({ lastNameFocus: true })}
                        onBlur={e =>
                          this.setState({
                            lastNameFocus: false
                          })
                        }
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText style={{ borderColor: "#FFFFFF" }}>
                          <i className="tim-icons icon-tablet-2" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        style={{ borderColor: "#FFFFFF" }}
                        placeholder={
                          this.props.pageStore.register.form.handphone
                        }
                        type="number"
                        onFocus={e => this.setState({ lastNameFocus: true })}
                        onBlur={e =>
                          this.setState({
                            lastNameFocus: false
                          })
                        }
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText style={{ borderColor: "#FFFFFF" }}>
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        style={{ borderColor: "#FFFFFF" }}
                        placeholder={this.props.pageStore.register.form.email}
                        type="email"
                        onFocus={e => this.setState({ lastNameFocus: true })}
                        onBlur={e =>
                          this.setState({
                            lastNameFocus: false
                          })
                        }
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText style={{ borderColor: "#FFFFFF" }}>
                          <i className="tim-icons icon-lock-circle" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        style={{ borderColor: "#FFFFFF" }}
                        placeholder={
                          this.props.pageStore.register.form.password
                        }
                        type="text"
                        onFocus={e => this.setState({ lastNameFocus: true })}
                        onBlur={e =>
                          this.setState({
                            lastNameFocus: false
                          })
                        }
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row> */}
              <Row
                className="vertical-center"
                style={{ marginTop: "15px", marginRight: "30px" }}
              >
                <Col md={6}>
                  <a
                    href="http://cabinet.topgrowthfutures.com/users/register"
                    target="_blank"
                    style={{ color: "white" }}
                  >
                    <Button
                      color="info"
                      type="button"
                      style={{ width: "100%", marginRight: "35px" }}
                    >
                      {/* {this.props.pageStore.register.form.leftButton} */}
                      {
                        this.props.pageStore.Landing.HeaderLanding.SignUp[0]
                          .leftTick
                      }
                    </Button>
                  </a>
                </Col>

                <Col md={6}>
                  <a
                    href="http://cabinet.topgrowthfutures.com/users/register"
                    target="_blank"
                    style={{ color: "white" }}
                  >
                    <Button
                      color="info"
                      type="button"
                      style={{ width: "100%" }}
                    >
                      {/* {this.props.pageStore.register.form.rightButton} */}
                      {
                        this.props.pageStore.Landing.HeaderLanding.SignUp[0]
                          .rightTick
                      }
                    </Button>
                  </a>
                </Col>
              </Row>
            </CardBody>

            <div
              className="pull-left ml-3 mb-3"
              style={{ position: "absolute", bottom: 0 }}
            >
              <h6>
                <Row>
                  <div style={{ cursor: "default", marginLeft: "10px" }}>
                    {ReactHtmlParser(
                      this.props.pageStore.Landing.HeaderLanding.SignUp[0]
                        .link_name1
                    )}
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <a
                      className="textlink"
                      href={
                        this.props.pageStore.Landing.HeaderLanding.SignUp[0]
                          .content_link
                      }
                      target="_blank"
                    >
                      {ReactHtmlParser(
                        this.props.pageStore.Landing.HeaderLanding.SignUp[0]
                          .link_name2
                      )}
                    </a>
                  </div>
                </Row>
              </h6>
            </div>
          </Form>
        </Card>
      </>
    );
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  getContent: (section, lang) => dispatch(getContent(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardRegister);
