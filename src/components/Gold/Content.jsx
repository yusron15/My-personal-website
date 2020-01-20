import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Container,
  Row,
  Col,
  CardBody,
  CardTitle,
  Card,
  Table
} from "reactstrap";
import { LangContext } from "../MyContext";
import { isMobile } from "react-device-detect";

import ScrollAnimation from "react-animate-on-scroll";
import fg1 from "../../assets/img/gold.png";
import fg2 from "../../assets/img/forexgold2.png";
import fg3 from "../../assets/img/forexgold3.png";

import bg from "../../assets/img/gold-header.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import { connect } from "react-redux";
import { fetchPage } from "../../redux/ducks/actions.js";

import "../../assets/css/main.css";

const textTitle = {
  textAlign: "center",
  fontStyle: "Helvetica Bold",
  fontSize: "2rem",
  fontWeight: "bold",
  color: "white"
};

const textContent = {
  textAlign: "left",
  fontStyle: "Helvetica Bold",
  margin: 0,
  // top: "50%",
  fontSize: "1rem"
  // msTransform: "translateY(-50%)",
  // transform: "translateY(-50%)"
};

const intermezzo = {
  textAlign: "center",
  fontStyle: "Helvetica Bold",
  margin: 0,
  color: "black",
  fontSize: "1rem"
};
const text = {
  // fontWeight: "bold",
  color: "black",
  textAlign: "center",
  fontSize: "1rem"
};

class Features extends React.Component {
  async componentDidMount() {
    await this.props.fetchPage("landing", "id");
  }

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div className="cd-section broken-white" id="features">
            {/* ********* FEATURES 3 ********* */}
            <div
              className="team-1 background-header-mobile"
              style={{
                backgroundImage: `url(${bg})`,
                padding: 0
              }}
            >
              <BlurryNavbar />

              <div className="title title-header-mobile">
                {this.props.pageStore.Gold.header}
              </div>
            </div>
            <div className="space-50" />
            <div className="features-3" style={{ paddingTop: 0 }}>
              <Container fluid>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="8">
                    {/* <div
              // className="title"
              style={textTitle}
            >
              GOLD
            </div> */}
                    <p style={intermezzo}>{this.props.pageStore.Gold.top}</p>
                    {/* <Col className="mr-auto ml-auto" md="5"> */}
                    {/* </Col> */}
                  </Col>
                </Row>
                <Row>
                  <Col
                    sm={{ size: 10, order: 2, offset: 1 }}
                    style={{ marginTop: "50px" }}
                  >
                    <Row>
                      <Col lg="4">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img alt="..." className="img rounded" src={fg1} />
                          </a>
                        </div>
                        <div style={{ marginTop: "30px" }}>
                          <Table
                            // bordered
                            className="table-shopping"
                            style={{
                              backgroundColor: "#224377",
                              borderRadius: "5px",
                              borderCollapse: "inherit"
                              // borderWidth: "0.2px"
                            }}
                          >
                            <thead>
                              <tr style={{ backgroundColor: "#224377" }}>
                                <td className="text-white">
                                  <b>Product</b>
                                </td>
                                <td className="text-white">
                                  <b>LLG</b>
                                </td>
                              </tr>
                            </thead>

                            <tbody style={{ backgroundColor: "#D1D1D1" }}>
                              <tr>
                                <td style={text}>Contract Size</td>
                                <td style={text}>100 Troy Ounces</td>
                              </tr>
                              <tr>
                                <td style={text}>Fixed Exchanged Rate </td>
                                <td style={text}>USD 1.00 = Rp. 10,000-</td>
                              </tr>
                              <tr>
                                <td style={text}>Minimum Tick </td>
                                <td style={text}>10 cents</td>
                              </tr>
                              <tr>
                                <td style={text}>Value Per 10 Cents </td>
                                <td style={text}>Rp. 100,000</td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </Col>
                      <Col lg="8">
                        <div style={textContent}>
                          <div
                            className="title-content"
                            style={{ color: "black" }}
                          >
                            {this.props.pageStore.Gold.content[0].title}
                          </div>
                          <p style={{ color: "black", textAlign: "justify" }}>
                            {this.props.pageStore.Gold.content[0].content}
                          </p>{" "}
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col
                    sm={{ size: 10, order: 2, offset: 1 }}
                    //   style={{ marginTop: "50px" }}
                  >
                    <Row>
                      <Col lg="12">
                        <div style={{ marginTop: "50px" }}>
                          <div style={textContent}>
                            <div
                              className="title-content"
                              style={{ color: "black" }}
                            >
                              {this.props.pageStore.Gold.content[1].title}
                            </div>
                            <p
                              style={{
                                textAlign: "left",
                                color: "black",
                                textAlign: "justify"
                              }}
                            >
                              {this.props.pageStore.Gold.content[1].content}
                            </p>{" "}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
              {/* <hr
        style={{
          color: "grey",
          backgroundColor: "grey",
          height: 0.5,
          width: "100vw",
          borderColor: "grey"
        }}
      /> */}
            </div>

            {/* ********* END FEATURES 3 ********* */}
          </div>{" "}
        </>
      );
    }
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div className="cd-section broken-white" id="features">
                {/* ********* FEATURES 3 ********* */}
                <div
                  className="team-1 background-header"
                  style={{
                    backgroundImage: `url(${bg})`,
                    padding: 0
                  }}
                >
                  <BlurryNavbar />

                  <div className="title title-header">
                    {this.props.pageStore.Gold.header}
                  </div>
                </div>
                <div className="space-50" />
                <div className="features-3" style={{ paddingTop: 0 }}>
                  <Container fluid>
                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="8">
                        {/* <div
                    // className="title"
                    style={textTitle}
                  >
                    GOLD
                  </div> */}
                        <p style={intermezzo}>
                          {this.props.pageStore.Gold.top}
                        </p>
                        {/* <Col className="mr-auto ml-auto" md="5"> */}
                        {/* </Col> */}
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        sm={{ size: 10, order: 2, offset: 1 }}
                        style={{ marginTop: "50px" }}
                      >
                        <Row>
                          <Col lg="4">
                            <div className="card-image">
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <img
                                  alt="..."
                                  className="img rounded"
                                  src={fg1}
                                />
                              </a>
                            </div>
                            <div style={{ marginTop: "30px" }}>
                              <Table
                                // bordered
                                className="table-shopping"
                                style={{
                                  backgroundColor: "#224377",
                                  borderRadius: "5px",
                                  borderCollapse: "inherit"
                                  // borderWidth: "0.2px"
                                }}
                              >
                                <thead>
                                  <tr style={{ backgroundColor: "#224377" }}>
                                    <td className="text-white">
                                      <b>Product</b>
                                    </td>
                                    <td className="text-white">
                                      <b>LLG</b>
                                    </td>
                                  </tr>
                                </thead>

                                <tbody style={{ backgroundColor: "#D1D1D1" }}>
                                  <tr>
                                    <td style={text}>Contract Size</td>
                                    <td style={text}>100 Troy Ounces</td>
                                  </tr>
                                  <tr>
                                    <td style={text}>Fixed Exchanged Rate </td>
                                    <td style={text}>USD 1.00 = Rp. 10,000-</td>
                                  </tr>
                                  <tr>
                                    <td style={text}>Minimum Tick </td>
                                    <td style={text}>10 cents</td>
                                  </tr>
                                  <tr>
                                    <td style={text}>Value Per 10 Cents </td>
                                    <td style={text}>Rp. 100,000</td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                          </Col>
                          <Col lg="8">
                            <div style={textContent}>
                              <div
                                className="title-content"
                                style={{ color: "black" }}
                              >
                                {this.props.pageStore.Gold.content[0].title}
                              </div>
                              <p
                                style={{ color: "black", textAlign: "justify" }}
                              >
                                {this.props.pageStore.Gold.content[0].content}
                              </p>{" "}
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        sm={{ size: 10, order: 2, offset: 1 }}
                        //   style={{ marginTop: "50px" }}
                      >
                        <Row>
                          <Col lg="12">
                            <div style={{ marginTop: "50px" }}>
                              <div style={textContent}>
                                <div
                                  className="title-content"
                                  style={{ color: "black" }}
                                >
                                  {this.props.pageStore.Gold.content[1].title}
                                </div>
                                <p
                                  style={{
                                    textAlign: "left",
                                    color: "black",
                                    textAlign: "justify"
                                  }}
                                >
                                  {this.props.pageStore.Gold.content[1].content}
                                </p>{" "}
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                  {/* <hr
              style={{
                color: "grey",
                backgroundColor: "grey",
                height: 0.5,
                width: "100vw",
                borderColor: "grey"
              }}
            /> */}
                </div>

                {/* ********* END FEATURES 3 ********* */}
              </div>{" "}
            </>
          );
        }}
      </LangContext.Consumer>
    );
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  fetchPage: (section, lang) => dispatch(fetchPage(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Features);
