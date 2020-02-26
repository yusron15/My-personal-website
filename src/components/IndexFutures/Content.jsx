import React from "react";

// reactstrap components
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
  CarouselIndicators,
  UncontrolledDropdown,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  CarouselControl,
  Carousel,
  CarouselItem
} from "reactstrap";
import { LangContext } from "../MyContext";
import ScrollAnimation from "react-animate-on-scroll";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import SidebarMobile from "components/Navbars/SidebarMobile";
import bg1 from "../../assets/img/indexfutures1.png";
import bg from "../../assets/img/header-indexfutures2.png";
import prevButton from "../../assets/img/prevbutton.png";
import nextButton from "../../assets/img/nextbutton.png";
import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";
import { isMobile } from "react-device-detect";
import { TableContent3, TableContent4 } from "../Table/Table";

import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import "../../assets/css/main.css";

const textTitle = {
  fontWeight: "bold",
  color: "black",
  fontSize: "1.7rem"
};

const textTitleSlider = {
  fontWeight: "bold",
  color: "white",
  fontSize: "1.7rem",
  marginBottom: "10px"
};

const textTitleSlide = {
  fontWeight: "bold",
  color: "White",
  fontSize: "1.7rem"
};

const textSubtitle = {
  fontWeight: "bold",
  color: "white",
  fontSize: "1rem"
};

const textDesc = {
  color: "white",
  fontSize: "1rem"
};

// core components
const items = [
  {
    content: (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <Row>
              <Col md="11" className="offset-md-1">
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.66)"
                  }}
                >
                  <div className="space-50" />
                  <Container>
                    <Row>
                      <Col md="12">
                        <div style={textTitle}>
                          <b>
                            {this.props.pageStore.indexfutures.slide[0].title}
                          </b>
                        </div>
                        <div style={textSubtitle}>
                          <b>
                            {
                              this.props.pageStore.indexfutures.slide[0]
                                .subtitle
                            }
                          </b>
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="description" style={textDesc}>
                          {ReactHtmlParser(
                            this.props.pageStore.indexfutures.slide[0].content
                          )}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <div className="space-50" />
                </div>
              </Col>
            </Row>
          );
        }}
      </LangContext.Consumer>
    ),
    altText: "",
    caption: "",
    src: "0"
  },
  {
    content: (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <Row>
              <Col md="11" className="offset-md-1">
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.66)"
                  }}
                >
                  <div className="space-50" />
                  <Container>
                    <Row>
                      <Col md="12">
                        <div style={textTitle}>
                          <b>
                            {this.props.pageStore.indexfutures.slide[1].title}
                          </b>
                        </div>
                        <div style={textSubtitle}>
                          <b>
                            {
                              this.props.pageStore.indexfutures.slide[1]
                                .subtitle
                            }
                          </b>
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="description" style={textDesc}>
                          {ReactHtmlParser(
                            this.props.pageStore.indexfutures.slide[1].content
                          )}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <div className="space-50" />
                </div>
              </Col>
            </Row>
          );
        }}
      </LangContext.Consumer>
    ),
    altText: "",
    caption: "",
    src: "1"
  },
  {
    content: (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <Row>
              <Col md="11" className="offset-md-1">
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.66)"
                  }}
                >
                  <div className="space-50" />
                  <Container>
                    <Row>
                      <Col md="12">
                        <div style={textTitle}>
                          <b>
                            {this.props.pageStore.indexfutures.slide[2].title}
                          </b>
                        </div>
                        <div style={textSubtitle}>
                          <b>
                            {
                              this.props.pageStore.indexfutures.slide[2]
                                .subtitle
                            }
                          </b>
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="description" style={textDesc}>
                          {ReactHtmlParser(
                            this.props.pageStore.indexfutures.slide[2].content
                          )}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <div className="space-50" />
                </div>
              </Col>
            </Row>
          );
        }}
      </LangContext.Consumer>
    ),
    altText: "",
    caption: "",
    src: "2"
  }
];

const font = {
  //   color: "black",
  textAlign: "left"
};

class Content extends React.Component {
  state = {
    activeIndex: 0
  };

  async componentDidMount() {
    await this.props.getContent("indexfutures", "id");
  }

  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div
            className="team-1 background-header-mobile"
            style={{
              backgroundImage:
                "url(" +
                this.props.pageStore.indexfutures.image_background_mobile +
                ")",
              padding: 0
            }}
          >
            <SidebarMobile />

            {/* <BlurryNavbar />
            <ColoredNavbar location={{ ...this.props.location }} /> */}
            <div className="title title-header-mobile">
              {ReactHtmlParser(this.props.pageStore.indexfutures.header)}
            </div>
            <Container>
              <div
                style={{ textAlign: "center" }}
                className="subheader font-white"
              >
                {ReactHtmlParser(this.props.pageStore.indexfutures.sub_header)}
              </div>
            </Container>
          </div>
          <div className="cd-section broken-white" id="teams">
            <div className="team-1">
              <Container>
                {this.props.pageStore.indexfutures.content.map(
                  (item, index) => {
                    return (
                      <Row>
                        <Col md="12" style={{ marginTop: "30px" }}>
                          <div className="font-black" style={textTitle}>
                            {ReactHtmlParser(item.title)}
                          </div>
                        </Col>
                        <Col md="12">
                          <div
                            className="description font-black"
                            style={textDesc}
                          >
                            <p> {ReactHtmlParser(item.content)}</p>
                          </div>
                        </Col>
                      </Row>
                    );
                  }
                )}
              </Container>
            </div>
            <div>
              <div
                className="team-1"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/coin.png") + ")",
                  backgroundSize: "cover"
                }}
              >
                <Container>
                  <div className="font-black" style={textTitleSlider}>
                    {ReactHtmlParser(
                      this.props.pageStore.indexfutures.title_slide
                    )}
                  </div>
                </Container>
                <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOut">
                  <Carousel
                    activeIndex={this.state.activeIndex}
                    next={this.next}
                    previous={this.previous}
                  >
                    <CarouselIndicators
                      // items={items}
                      items={this.props.pageStore.indexfutures.slide.map(
                        (item, index) => index
                      )}
                      activeIndex={this.state.activeIndex}
                      onClickHandler={this.goToIndex}
                    />
                    {this.props.pageStore.indexfutures.slide.map(
                      (item, key) => {
                        return (
                          <CarouselItem
                            onExiting={this.onExiting}
                            onExited={this.onExited}
                            key={key}
                          >
                            <Row>
                              <Col md="11" className="offset-md-1">
                                <div
                                  style={{
                                    backgroundColor: "rgba(0, 0, 0, 0.66)",
                                    marginBottom: "5%"
                                  }}
                                >
                                  <div className="space-50" />
                                  <Container>
                                    <Row>
                                      <Col md="12">
                                        <div style={textTitleSlide}>
                                          <b>{item.title}</b>
                                        </div>
                                        <div style={textSubtitle}>
                                          <b>{item.subtitle}</b>
                                        </div>
                                      </Col>
                                      <Col md="12">
                                        <div
                                          className="description"
                                          style={textDesc}
                                        >
                                          {item.content}
                                        </div>
                                      </Col>
                                    </Row>
                                  </Container>
                                  <div className="space-50" />
                                </div>
                              </Col>
                            </Row>
                          </CarouselItem>
                        );
                      }
                    )}
                  </Carousel>
                </ScrollAnimation>
              </div>
            </div>
            <div className="team-1">
              <Container>
                <div style={{ overflow: "scroll" }}>
                  <Table
                    className="table-shopping"
                    style={{
                      backgroundColor: "#1565ff",
                      borderRadius: "5px",
                      borderCollapse: "inherit"
                    }}
                  >
                    <thead>
                      <tr style={{ backgroundColor: "#1565ff" }}>
                        <td className="text-white text-center">
                          <b>
                            {this.props.pageStore.indexfutures.table[0].prefix1}
                          </b>
                        </td>
                        <td className="text-white text-center">
                          <b>
                            {this.props.pageStore.indexfutures.table[0].prefix2}
                          </b>
                        </td>
                        <td className="text-white text-center">
                          <b>
                            {this.props.pageStore.indexfutures.table[0].prefix3}
                          </b>
                        </td>
                        <td className="text-white text-center">
                          <b>
                            {this.props.pageStore.indexfutures.table[0].prefix4}
                          </b>
                        </td>
                      </tr>
                    </thead>
                    {this.props.pageStore.indexfutures.table[0].tableData.map(
                      (item, index) => {
                        return (
                          <TableContent4
                            prefix1={item.prefix1}
                            prefix2={item.prefix2}
                            prefix3={item.prefix3}
                            prefix4={item.prefix4}
                          />
                        );
                      }
                    )}
                  </Table>
                </div>
              </Container>
            </div>
          </div>{" "}
        </>
      );
    }
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div
                className="team-1 background-header"
                style={{
                  backgroundImage:
                    "url(" +
                    this.props.pageStore.indexfutures.image_background +
                    ")",
                  padding: 0
                }}
              >
                <BlurryNavbar />
                <ColoredNavbar location={{ ...this.props.location }} />
                <div className="title title-header">
                  {ReactHtmlParser(this.props.pageStore.indexfutures.header)}
                </div>
                <Container>
                  <div
                    style={{ textAlign: "center" }}
                    className="subheader font-white"
                  >
                    {ReactHtmlParser(
                      this.props.pageStore.indexfutures.sub_header
                    )}
                  </div>
                </Container>
              </div>
              <div
                className="cd-section broken-white"
                id="teams"
                // style={{ backgroundColor: "#D4D4D4" }}
              >
                <div className="team-1">
                  <Container>
                    {this.props.pageStore.indexfutures.content.map(
                      (item, index) => {
                        return (
                          <Row>
                            <Col md="12" style={{ marginTop: "30px" }}>
                              <div className="font-black" style={textTitle}>
                                {ReactHtmlParser(item.title)}
                              </div>
                            </Col>
                            <Col md="12">
                              <div
                                className="description font-black"
                                style={textDesc}
                              >
                                <p> {ReactHtmlParser(item.content)}</p>
                              </div>
                            </Col>
                          </Row>
                        );
                      }
                    )}
                  </Container>
                </div>
                <div>
                  <div
                    className="team-1"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/coin.png") + ")",
                      backgroundSize: "cover",
                      minHeight: "600px"
                    }}
                  >
                    <Container>
                      <div style={textTitleSlider}>
                        {ReactHtmlParser(
                          this.props.pageStore.indexfutures.title_slide
                        )}
                      </div>
                    </Container>
                    <ScrollAnimation
                      animateIn="fadeInRight"
                      animateOut="fadeOut"
                    >
                      <Carousel
                        activeIndex={this.state.activeIndex}
                        next={this.next}
                        previous={this.previous}
                      >
                        {this.props.pageStore.indexfutures.slide.map(
                          (item, key) => {
                            return (
                              <CarouselItem
                                onExiting={this.onExiting}
                                onExited={this.onExited}
                                key={key}
                              >
                                {
                                  <div>
                                    <Row>
                                      <Col md="11" className="offset-md-1">
                                        <div
                                          style={{
                                            backgroundColor:
                                              "rgba(0, 0, 0, 0.66)",
                                            marginBottom: "5%",
                                            minHeight: 400
                                          }}
                                        >
                                          <div className="space-50" />
                                          <Container>
                                            <Row>
                                              <Col md="12">
                                                <div style={textTitleSlide}>
                                                  <b>{item.title}</b>
                                                </div>
                                                <div style={textSubtitle}>
                                                  <b>{item.subtitle}</b>
                                                </div>
                                              </Col>
                                              <Col md="12">
                                                <div
                                                  className="description"
                                                  style={textDesc}
                                                >
                                                  {ReactHtmlParser(
                                                    item.content
                                                  )}
                                                </div>
                                              </Col>
                                            </Row>
                                          </Container>
                                          <div className="space-50" />
                                        </div>
                                      </Col>
                                    </Row>
                                  </div>
                                }
                              </CarouselItem>
                            );
                          }
                        )}
                      </Carousel>
                      <CarouselIndicators
                        items={this.props.pageStore.indexfutures.slide.map(
                          (item, index) => index
                        )}
                        activeIndex={this.state.activeIndex}
                        onClickHandler={this.goToIndex}
                      />
                    </ScrollAnimation>
                  </div>
                </div>
                <div className="team-1">
                  <Container>
                    <Table
                      className="table-shopping"
                      style={{
                        backgroundColor: "#1565ff",
                        borderRadius: "5px",
                        borderCollapse: "inherit"
                      }}
                    >
                      <thead>
                        <tr style={{ backgroundColor: "#1565ff" }}>
                          <td className="text-white text-center">
                            <b>
                              {
                                this.props.pageStore.indexfutures.table[0]
                                  .prefix1
                              }
                            </b>
                          </td>
                          <td className="text-white text-center">
                            <b>
                              {
                                this.props.pageStore.indexfutures.table[0]
                                  .prefix2
                              }
                            </b>
                          </td>
                          <td className="text-white text-center">
                            <b>
                              {
                                this.props.pageStore.indexfutures.table[0]
                                  .prefix3
                              }
                            </b>
                          </td>
                          <td className="text-white text-center">
                            <b>
                              {
                                this.props.pageStore.indexfutures.table[0]
                                  .prefix4
                              }
                            </b>
                          </td>
                        </tr>
                      </thead>
                      {this.props.pageStore.indexfutures.table[0].tableData.map(
                        (item, index) => {
                          return (
                            <TableContent4
                              prefix1={item.prefix1}
                              prefix2={item.prefix2}
                              prefix3={item.prefix3}
                              prefix4={item.prefix4}
                            />
                          );
                        }
                      )}
                    </Table>
                  </Container>
                </div>
                {/* ********* END TEAM 1 ********* */}
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
  getContent: (section, lang) => dispatch(getContent(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
