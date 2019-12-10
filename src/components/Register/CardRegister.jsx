import React from "react";
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
          // className="card-login"
          style={{
            backgroundColor: "rgba(14,14,14,0.7)"
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
                      <TextField
                        id="test-small"
                        fullWidth
                        variant="outlined"
                        label="First Name"
                        size="small"
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <InputGroup>
                      <TextField
                        id="test-small"
                        fullWidth
                        variant="outlined"
                        label="First Name"
                        size="small"
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <InputGroup>
                      <TextField
                        id="test-small"
                        fullWidth
                        variant="outlined"
                        label="First Name"
                        size="small"
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <InputGroup>
                      <TextField
                        id="test-small"
                        fullWidth
                        variant="outlined"
                        label="First Name"
                        size="small"
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              {/* <CardFooter className="text-center"> */}
              <Row>
                <Button
                  className="btn-round"
                  color="info"
                  type="button"
                  block
                  style={{ height: 50, fontSize: 18 }}
                >
                  Buat demo Akun
                </Button>

                <Button
                  className="btn-round"
                  color="info"
                  type="button"
                  block
                  style={{ height: 50, fontSize: 18 }}
                >
                  Buat real Akun
                </Button>
              </Row>
              {/* </CardFooter> */}
            </CardBody>

            <div className="pull-left ml-3 mb-3">
              <h6>
                <a
                  className="link footer-link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  style={{ color: "white" }}
                >
                  Create Account
                </a>
              </h6>
            </div>
            <div className="pull-right mr-3 mb-3">
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
            </div>
          </Form>
        </Card>
      </>
    );
  }
}

export default CardRegister;
