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
                {this.props.pageStore.register.form.title}
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
              </Row>
              {/* <CardFooter className="text-center"> */}
              {/* </CardFooter> */}
              <Row>
                <Col md="6">
                  <Button block color="info" type="button">
                    {this.props.pageStore.register.form.leftButton}
                  </Button>
                </Col>
                <Col md="6">
                  <Button block color="info" type="button">
                    {this.props.pageStore.register.form.rightButton}
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
                  {this.props.pageStore.register.form.signIn}
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

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  getContent: (section, lang) => dispatch(getContent(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardRegister);
