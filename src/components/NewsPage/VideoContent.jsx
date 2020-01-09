import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  CardText
} from "reactstrap";
import ReactPlayer from "react-player";
import videos from "../../assets/video/nyc-exchange.mp4";
import Select from "react-select";

import NewsLetter from "../NewsLetter/NewsLetter";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar";
import bg from "../../assets/img/video-header.png";
import Footer from "../Footers/Footer";
import "../../assets/css/main.css";
import Content from "../RelatedPost/Layout";
import NewsTicker from "./NewsTicker";
import fc1 from "../../assets/img/fc1.png";
import fc2 from "../../assets/img/fc2.png";
import fc5 from "../../assets/img/fc5.png";
import fc3 from "../../assets/img/fc3.png";
import fc4 from "../../assets/img/fc4.png";

class Blogs extends React.Component {
  state = {
    dataSelect: ""
  };
  render() {
    return (
      <>
        <div className="cd-section" id="projects">
          <div
            className="project-raised broken-white"
            // style={{ backgroundColor: "#D4D4D4" }}
          >
            <div
              className="team-1 bg-header background-header"
              style={{
                backgroundImage: `url(${bg})`,
                padding: 0
              }}
            >
              <BlurryNavbar />
              <ColoredNavbar location={{ ...this.props.location }} />

              <div className="title title-header">Video</div>
            </div>
            <NewsTicker />

            <div
              // className="broken-white"
              style={{
                // backgroundColor: "#D4D4D4",
                padding: "0 12% 2% 12%"
              }}
            >
              <div
              // style={{
              //   padding: "0 15% 2% 15%"
              // }}
              >
                {/* <div
                  className="title"
                  style={{
                    color: "black",
                    fontSize: "2rem",
                    fontWeight: "bold"
                  }}
                >
                  Belajar Forex untuk Pemula
                </div> */}
                <Col
                  md="3"
                  style={{
                    backgroundColor: "transparent",
                    padding: 0,
                    color: "black",
                    marginTop: "20px"
                  }}
                >
                  <Select
                    style={{
                      backgroundColor: "transparent"
                    }}
                    value="index"
                    options={[
                      {
                        label: "Pengenalan tentang Topgrowth",
                        value: "Pengenalan tentang Topgrowth"
                      },
                      {
                        label: "Trading untuk pemula",
                        value: "Trading untuk pemula"
                      },
                      {
                        label: "Platform Topgrowth Trader & Pro-I Trader",
                        value: "Platform Topgrowth Trader & Pro-I Trader"
                      },
                      {
                        label: "Webinar",
                        value: "Webinar"
                      }
                    ]}
                    value={this.state.dataSelect}
                    onChange={async data => {
                      await this.setState({
                        dataSelect: data
                      });
                      let dataSelect = [
                        {
                          label: "Pengenalan tentang Topgrowth",
                          value: "Pengenalan tentang Topgrowth"
                        },
                        {
                          label: "Trading untuk pemula",
                          value: "Trading untuk pemula"
                        },
                        {
                          label: "Platform Topgrowth Trader & Pro-I Trader",
                          value: "Platform Topgrowth Trader & Pro-I Trader"
                        },
                        {
                          label: "Webinar",
                          value: "Webinar"
                        }
                      ];
                      return dataSelect.filter(
                        item => this.state.dataSelect.value === item.value
                      )[0];
                    }}
                  />
                </Col>
                <Row>
                  <Col md="3">
                    <Card style={{ backgroundColor: "white" }}>
                      <ReactPlayer
                        url={videos}
                        controls={true}
                        height="200"
                        width="250"
                      />
                      <CardBody>
                        <CardTitle
                          style={{ color: "black", fontWeight: "bold" }}
                        >
                          Course 1: Pengenalan Trading
                        </CardTitle>
                        <CardText>
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col md="3">
                    <Card style={{ backgroundColor: "white" }}>
                      <ReactPlayer
                        url={videos}
                        controls={true}
                        height="200"
                        width="250"
                      />
                      <CardBody>
                        <CardTitle
                          style={{ color: "black", fontWeight: "bold" }}
                        >
                          Course 1: Pengenalan Trading
                        </CardTitle>
                        <CardText>
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col md="3">
                    <Card style={{ backgroundColor: "white" }}>
                      <ReactPlayer
                        url={videos}
                        controls={true}
                        height="200"
                        width="250"
                      />
                      <CardBody>
                        <CardTitle
                          style={{ color: "black", fontWeight: "bold" }}
                        >
                          Course 1: Pengenalan Trading
                        </CardTitle>
                        <CardText>
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col md="3">
                    <Card style={{ backgroundColor: "white" }}>
                      <ReactPlayer
                        url={videos}
                        controls={true}
                        height="200"
                        width="250"
                      />
                      <CardBody>
                        <CardTitle
                          style={{ color: "black", fontWeight: "bold" }}
                        >
                          Course 1: Pengenalan Trading
                        </CardTitle>
                        <CardText>
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>

                <Row>
                  <Col md="3">
                    <Card style={{ backgroundColor: "white" }}>
                      <ReactPlayer
                        url={videos}
                        controls={true}
                        height="200"
                        width="250"
                      />
                      <CardBody>
                        <CardTitle
                          style={{ color: "black", fontWeight: "bold" }}
                        >
                          Course 1: Pengenalan Trading
                        </CardTitle>
                        <CardText>
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col md="3">
                    <Card style={{ backgroundColor: "white" }}>
                      <ReactPlayer
                        url={videos}
                        controls={true}
                        height="200"
                        width="250"
                      />
                      <CardBody>
                        <CardTitle
                          style={{ color: "black", fontWeight: "bold" }}
                        >
                          Course 1: Pengenalan Trading
                        </CardTitle>
                        <CardText>
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col md="3">
                    <Card style={{ backgroundColor: "white" }}>
                      <ReactPlayer
                        url={videos}
                        controls={true}
                        height="200"
                        width="250"
                      />
                      <CardBody>
                        <CardTitle
                          style={{ color: "black", fontWeight: "bold" }}
                        >
                          Course 1: Pengenalan Trading
                        </CardTitle>
                        <CardText>
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col md="3">
                    <Card style={{ backgroundColor: "white" }}>
                      <ReactPlayer
                        url={videos}
                        controls={true}
                        height="200"
                        width="250"
                      />
                      <CardBody>
                        <CardTitle
                          style={{ color: "black", fontWeight: "bold" }}
                        >
                          Course 1: Pengenalan Trading
                        </CardTitle>
                        <CardText>
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          {/* ********* END PROJECTS 2 ********* */}
        </div>
        <NewsLetter />
        <Footer />
      </>
    );
  }
}

export default Blogs;
