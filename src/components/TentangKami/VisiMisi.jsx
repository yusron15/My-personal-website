import React from "react";

import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardFooter,
  Container,
  Row,
  Col
} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { LangContext } from "../MyContext";

class VisiMisi extends React.Component {
  state = {
    activeTab: "1"
  };
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  render() {
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div className="cd-section" id="projects">
                <div
                  className="projects-3 header-filter"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/visimisi.png") + ")",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(52, 52, 52, 0.8)"
                  }}
                >
                  <ScrollAnimation
                    animateIn="fadeInRight"
                    delay={300}
                    animateOut="fadeOut"
                  >
                    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.66)" }}>
                      <Container>
                        <div className="space-50" />
                        <Row>
                          <Col md="6">
                            <ScrollAnimation
                              animateIn="fadeInRight"
                              delay={900}
                              animateOut="fadeOut"
                            >
                              <h2 className="title">
                                {lang.tentangkami.visi.title}
                              </h2>
                              <p
                                style={{
                                  textAlign: "justify",
                                  fontSize: "1rem"
                                }}
                              >
                                {lang.tentangkami.visi.content}
                              </p>
                            </ScrollAnimation>
                          </Col>
                          <Col md="6">
                            <ScrollAnimation
                              animateIn="fadeInRight"
                              delay={1200}
                              animateOut="fadeOut"
                            >
                              <h2 className="title">
                                {lang.tentangkami.misi.title}
                              </h2>
                              <p
                                style={{
                                  textAlign: "justify",
                                  fontSize: "1rem"
                                }}
                              >
                                {lang.tentangkami.misi.content}
                              </p>
                            </ScrollAnimation>
                          </Col>
                        </Row>

                        <div className="space-50" />
                      </Container>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>{" "}
            </>
          );
        }}
      </LangContext.Consumer>
    );
  }
}

export default VisiMisi;
