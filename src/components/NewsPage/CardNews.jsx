import React from "react";

// reactstrap components
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

import user from "../../assets/img/user-black-icon.png";
import calendar from "../../assets/img/icon-calendar.png";
import "../../assets/css/main.css";

class CardNews extends React.Component {
  render() {
    const { title, description, image, person, date } = this.props;
    return (
      <>
        {/* <Card className="card-profile" style={{ borderRadius: "10px" }}>
          <div className="card-image">
            <img
              alt="..."
              className="img img-raised rounded"
              src={image}
              style={{ height: "300px", width: "300px" }}
            />
          </div>
          <CardBody
            className="broken-white"
            style={{
              textAlign: "left"
              // backgroundColor: "#D4D4D4"
            }}
          >
            <h4 style={{ color: "black" }}>{title}</h4>
            <p style={{ color: "black" }}>{description}</p>
            <Container>
              <Row>
                <Col md="6">
                  <Row>
                    <img src={user} />
                    <p
                      className="vertical-center font-black"
                      style={{ color: "black", paddingLeft: "30px" }}
                    >
                      {person}
                    </p>
                  </Row>
                </Col>
                <Col md="6">
                  <Row>
                    <img src={calendar} />
                    <p
                      className="vertical-center font-black"
                      style={{ color: "black", paddingLeft: "30px" }}
                    >
                      {date}
                    </p>
                  </Row>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card> */}

        <div>
          <CardImg
            top
            width="100%"
            height="50%"
            src={image}
            alt="Card image cap"
          />
          <div className="broken-white font-black">
            <CardBody
              className="broken-white"
              style={{
                textAlign: "left"
                // backgroundColor: "#D4D4D4"
              }}
            >
              <h4 style={{ color: "black" }}>{title}</h4>
              <p style={{ color: "black" }}>{description}</p>
              <Container>
                <Row>
                  <Col md="6">
                    <Row>
                      <img
                        src={user}
                        style={{ height: "20px", width: "auto" }}
                      />
                      <p
                        className="vertical-center font-black"
                        style={{ color: "black", paddingLeft: "30px" }}
                      >
                        {person}
                      </p>
                    </Row>
                  </Col>
                  <Col md="6">
                    <Row>
                      <img
                        src={calendar}
                        style={{ height: "20px", width: "auto" }}
                      />
                      <p
                        className="vertical-center font-black"
                        style={{ color: "black", paddingLeft: "30px" }}
                      >
                        {date}
                      </p>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </div>
        </div>
      </>
    );
  }
}

export default CardNews;
