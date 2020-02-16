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
            marginTop: "72%",
            minHeight: "30vh"
          }}
        >
          <Form
            action=""
            className="form"
            method=""
            style={{ margin: "0 5% 0 5%" }}
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
                {this.props.pageStore.register.form.title}
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
              <Row className="vertical-center" style={{ marginTop: "15px" }}>
                <div>
                  <a
                    href="http://cabinet.topgrowthfutures.com/users/register"
                    target="_blank"
                    style={{ color: "white" }}
                  >
                    <Button
                      color="info"
                      type="button"
                      style={{ width: "100%", marginRight: "25px" }}
                    >
                      {this.props.pageStore.register.form.leftButton}
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="http://cabinet.topgrowthfutures.com/users/register"
                    target="_blank"
                    style={{ color: "white" }}
                  >
                    <Button
                      color="info"
                      type="button"
                      style={{ width: "100%", marginLeft: "25px" }}
                    >
                      {this.props.pageStore.register.form.rightButton}
                    </Button>
                  </a>
                </div>
              </Row>
            </CardBody>

            <div
              className="pull-left ml-3 mb-3"
              style={{ position: "absolute", bottom: 0 }}
            >
              <h6>
                <a
                  href="http://cabinet.topgrowthfutures.com/users/login"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  {this.props.pageStore.register.form.signIn}
                </a>
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
