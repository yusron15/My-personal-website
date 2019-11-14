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
class NewsLetter extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#1D1E1F" }}>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="8" xs="10">
              <Card className="card-raised card-form-horizontal black-newsletter">
                <CardBody>
                  <Form action="" method="">
                    <Row>
                      <Col sm="8">
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
