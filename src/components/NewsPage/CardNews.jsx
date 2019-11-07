import React from "react";

// reactstrap components
import { Card, CardBody } from "reactstrap";

import "../../assets/css/main.css";

class CardNews extends React.Component {
  render() {
    const { title, description, image } = this.props;
    return (
      <>
        <Card className="card-profile">
          <div className="card-image">
            <img alt="..." className="img img-raised rounded" src={image} />
          </div>
          <CardBody className="black-news" style={{ textAlign: "left" }}>
            <h4>{title}</h4>
            <p>{description}</p>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default CardNews;
