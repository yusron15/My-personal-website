import React, { Component } from "react";
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
  CarouselItem,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";

import "../../assets/css/main.css";
class NewsLetter extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#1D1E1F" }}>
        <Container>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="8" xs="10">
                <div className="text-center">
                  <h4 className="title">Subscribe to our Newsletter</h4>
                  <p className="description">
                    Join our newsletter and get news in your inbox every week!
                    We hate spam too, so no worries about this.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="8" xs="10">
              <Card className="card-raised card-form-horizontal black-newsletter">
                <CardBody>
                  <Form action="" method="">
                    <Row>
                      <Col sm="8" style={{ marginTop: "5px" }}>
                        <InputGroup
                        // className={classnames({
                        //   "input-group-focus": this.state.emailFocus
                        // })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your Email..."
                            type="email"
                            onFocus={e => this.setState({ emailFocus: true })}
                            onBlur={e => this.setState({ emailFocus: false })}
                          />
                        </InputGroup>
                      </Col>
                      <Col sm="4">
                        <Button block color="info" type="button">
                          Subscribe
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NewsLetter;
