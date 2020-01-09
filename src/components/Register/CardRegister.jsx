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
import "../../assets/css/main.css";

class CardRegister extends React.Component {
  render() {
    return (
      <>
        <Card
          style={{
            backgroundColor: "rgba(14,14,14,0.7)",
            marginTop: "20%"
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
                Sign Up
              </CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
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
                        placeholder="Full Name"
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
                        placeholder="Hanphone Number"
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
                        placeholder="Email Address"
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
                        placeholder="Password"
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
              </Row>
              {/* <CardFooter className="text-center"> */}
              {/* </CardFooter> */}
              <Row>
                <Col md="6">
                  <Button block color="info" type="button">
                    Demo Akun
                  </Button>
                </Col>
                <Col md="6">
                  <Button block color="info" type="button">
                    Real Akun
                  </Button>
                </Col>
              </Row>
            </CardBody>

            <div className="pull-left ml-3 mb-3">
              <h6>
                <Link
                  to="/login"
                  // className="link footer-link"
                  style={{ color: "white" }}
                >
                  Have an account? Sign In
                </Link>
              </h6>
            </div>
            {/* <div className="pull-right mr-3 mb-3">
              <h6>
                <a
                  className="link footer-link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  style={{ color: "white" }}
                >
                  Need Help?
                </a>
              </h6>
            // </div> */}
          </Form>
        </Card>
      </>
    );
  }
}

export default CardRegister;
