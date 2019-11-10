import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";

import user from "../../assets/img/user.png";
import "../../assets/css/main.css";

class CardNews extends React.Component {
  render() {
    const { title, description, image, person, date } = this.props;
    return (
      <>
        <Card className="card-profile">
          <div className="card-image">
            <img alt="..." className="img img-raised rounded" src={image} />
          </div>
          <CardBody className="black-news" style={{ textAlign: "left" }}>
            <h4>{title}</h4>
            <p>{description}</p>
            <Container>
              <Row>
                <Col md="6">
                  <Row>
                    <img src={user} />
                    <p
                      className="vertical-center"
                      style={{ paddingLeft: "30px" }}
                    >
                      {person}
                    </p>
                  </Row>
                </Col>
                <Col md="6">
                  <Row>
                    <img src={user} />
                    <p
                      className="vertical-center"
                      style={{ paddingLeft: "30px" }}
                    >
                      {date}
                    </p>
                  </Row>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default CardNews;
