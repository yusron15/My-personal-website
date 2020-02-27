import React from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../MyContext";

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";

import "../../assets/css/main.css";
class Footers extends React.Component {
  async componentDidMount() {
    await this.props.getContent("landing", "id");
  }

  render() {
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div
                className="section section-footers"
                style={{ backgroundColor: "#1D1E1F" }}
              >
                {/* ********* BIG WHITE FOOTER V2 ********* */}
                {/* <footer className="footer footer-white footer-big"> */}
                <Container>
                  <div className="content">
                    <Row>
                      <Col md="3">
                        <div style={{ cursor: "default" }}>
                          {/* <h4>
                            <b style={{ cursor: "default", color: "white" }}>
                              {ReactHtmlParser(
                                this.props.pageStore.Footer[0].title
                              )}
                            </b>
                          </h4> */}
                          <span style={{ cursor: "default", color: "white" }}>
                            {ReactHtmlParser(
                              this.props.pageStore.Footer[0].title
                            )}
                          </span>
                          <span
                            style={{
                              fontSize: "0.3rem",
                              color: "white",
                              lineHeight: 1
                            }}
                          >
                            {ReactHtmlParser(
                              this.props.pageStore.Footer[0].content[0]
                            )}
                          </span>
                        </div>
                      </Col>
                      <Col md="3">
                        <h4 style={{ cursor: "default", color: "white" }}>
                          {ReactHtmlParser(
                            this.props.pageStore.Footer[1].title
                          )}
                        </h4>
                        <p>
                          <Link to="/tentang-kami" style={{ color: "white" }}>
                            {ReactHtmlParser(
                              this.props.pageStore.Footer[1].content[0]
                            )}
                          </Link>
                        </p>
                        <p>
                          <Link to="/legalitas" style={{ color: "white" }}>
                            {ReactHtmlParser(
                              this.props.pageStore.Footer[1].content[1]
                            )}
                          </Link>
                        </p>
                        <p>
                          <Link
                            to="/rekening-terpisah"
                            style={{ color: "white" }}
                          >
                            {ReactHtmlParser(
                              this.props.pageStore.Footer[1].content[2]
                            )}
                          </Link>
                        </p>
                        <p>
                          <Link to="/cabang" style={{ color: "white" }}>
                            {ReactHtmlParser(
                              this.props.pageStore.Footer[1].content[3]
                            )}
                          </Link>
                        </p>
                      </Col>
                      <Col md="2">
                        <h4 style={{ cursor: "default", color: "white" }}>
                          {ReactHtmlParser(
                            this.props.pageStore.Footer[2].title
                          )}
                        </h4>
                        <Link to="/newspage" style={{ color: "white" }}>
                          {ReactHtmlParser(
                            this.props.pageStore.Footer[2].content[0]
                          )}
                        </Link>
                        <p style={{ cursor: "auto" }}>
                          <Link
                            to="/privacy-policy"
                            target="_blank"
                            style={{ color: "white" }}
                          >
                            Privacy Policy
                          </Link>
                        </p>
                      </Col>
                      <Col md="4">
                        <h4 style={{ cursor: "default", color: "white" }}>
                          {ReactHtmlParser(
                            this.props.pageStore.Footer[3].title
                          )}
                        </h4>

                        <p style={{ cursor: "default" }}>
                          {ReactHtmlParser(
                            this.props.pageStore.Footer[3].content[0]
                          )}
                        </p>

                        <p style={{ cursor: "default" }}>
                          {ReactHtmlParser(
                            this.props.pageStore.Footer[3].content[1]
                          )}
                        </p>

                        <p style={{ cursor: "default" }}>
                          {ReactHtmlParser(
                            this.props.pageStore.Footer[3].content[2]
                          )}
                        </p>

                        <p style={{ cursor: "default" }}>
                          {ReactHtmlParser(
                            this.props.pageStore.Footer[3].content[3]
                          )}
                        </p>

                        <p style={{ cursor: "default" }}>
                          {ReactHtmlParser(
                            this.props.pageStore.Footer[3].content[4]
                          )}
                        </p>

                        <p style={{ cursor: "default" }}>
                          {ReactHtmlParser(
                            this.props.pageStore.Footer[3].content[5]
                          )}
                        </p>

                        <p style={{ cursor: "auto" }}>
                          {ReactHtmlParser(
                            this.props.pageStore.Footer[3].content[6]
                          )}
                        </p>

                        {/* Sudirman Kav 86 Jakarta 10220 Indonesia Email:
                    customerservices@topgrowthfutures.com Tel: 021 2788-9366
                    Fax: 021 2788-9395 */}
                      </Col>
                    </Row>
                  </div>
                  <hr />
                  <div className="copyright pull-center">
                    Copyright © {new Date().getFullYear()} topgrowthfuture.co.id
                  </div>
                </Container>
                {/* </footer> */}
                {/* ********* END BIG WHITE FOOTER v2 ********* */}
              </div>
            </>
          );
        }}
      </LangContext.Consumer>
    );
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  getContent: (section, lang) => dispatch(getContent(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footers);
