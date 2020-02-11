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
  CardHeader,
  CardText,
  CardSubtitle
} from "reactstrap";
import { isMobile } from "react-device-detect";
import SearchField from "react-search-field";
import Select from "react-select";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar";
import bg from "../../assets/img/header-karir.png";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import ReactSearchBox from "react-search-box";
import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";
import ReactHtmlParser from "react-html-parser";

import _ from "lodash";
import "../../assets/css/main.css";

const customStyles = {
  control: (base, state) => ({
    ...base,
    minWidth: "300px",
    height: "35px",
    marginTop: "30px"
  })
};

const data = [
  {
    key: "john",
    value: "John Doe"
  },
  {
    key: "jane",
    value: "Jane Doe"
  },
  {
    key: "mary",
    value: "Mary Phillips"
  },
  {
    key: "robert",
    value: "Robert"
  },
  {
    key: "karius",
    value: "Karius"
  }
];

class Blogs extends React.Component {
  state = {
    dataSelect: "",
    stateKarir: [],
    openedCardIndex: ""
  };

  async componentDidMount() {
    await this.props.getContent("karir", this.props.currentLang, true);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.karirList !== this.props.karirList) {
      await this.setState({
        stateKarir: this.props.karirList.map(item => {
          return {
            ...item,
            open: false
          };
        })
      });
    }
  }

  renderContent = () => {
    let a = _.uniqBy(this.props.karirList, "devisi");
    console.log(a, "karirList");
    let divisions;
    if (a.length > 0) {
      divisions = a.map(item => {
        return {
          label: item.devisi,
          value: item.devisi
        };
      });
      console.log(divisions, "karirList");
    }
    if (isMobile) {
      return (
        <>
          {/* <SidebarMobile /> */}
          <div className="broken-white">
            <div>
              <div
                className="background-header-mobile"
                style={{
                  backgroundImage: `url(${bg})`,
                  padding: 0
                }}
              >
                <SidebarMobile />
                <div className="title title-header-mobile">Karir</div>
              </div>
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto" md="10">
                    <p
                      className="description font-black"
                      style={{ marginTop: "10%", marginBottom: "2%" }}
                    >
                      Berikut ini lowongan kerja yang tersedia di Topgrowth
                      Futures saat ini:
                    </p>
                    <Row style={{ marginBottom: "10%" }}>
                      <Col md="6">
                        {/* <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("assets/img/karir1.jpg")}
                            />
                          </a>
                        </div>
                      </Card> */}
                        <div
                          style={{
                            marginTop: "30px"
                          }}
                        >
                          <SearchField
                            className="react-search-field-input"
                            placeholder="Cari "
                          />
                        </div>
                      </Col>

                      <Col md="5">
                        {/* <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("assets/img/karir2.jpg")}
                            />
                          </a>
                        </div>
                      </Card> */}
                        {/* <div style={{ maxHeight: "10px" }}> */}
                        <Select
                          styles={customStyles}
                          value="index "
                          options={divisions}
                          value={this.state.dataSelect}
                          onChange={async data => {
                            await this.setState({
                              dataSelect: data
                            });
                          }}
                        />
                        {/* </div> */}
                      </Col>
                      {this.state.stateKarir.map((item, index) => (
                        <Col lg="4" xs="12">
                          <Card
                            className={`card-karir mobile ${
                              item.open ? "expand" : ""
                            }`}
                          >
                            <CardBody>
                              <CardTitle
                                className="text-center"
                                style={{
                                  color: "black",
                                  fontSize: "1rem",
                                  fontWeight: "bold",
                                  marginBottom: 10
                                }}
                              >
                                {item.devisi}
                              </CardTitle>
                              <CardSubtitle
                                className="text-center"
                                style={{
                                  color: "black",
                                  fontSize: "1rem",
                                  marginBottom: 30
                                }}
                              >
                                {item.description}
                              </CardSubtitle>
                              <CardText style={{ color: "black" }}>
                                {item.detail.map(itemDetail =>
                                  ReactHtmlParser(itemDetail.description)
                                )}
                              </CardText>
                              <CardText style={{ color: "black" }}>
                                {item.detail.map(itemDetail =>
                                  ReactHtmlParser(itemDetail.qualification)
                                )}
                              </CardText>
                              <div
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center"
                                }}
                              ></div>
                            </CardBody>
                            {!item.open && (
                              <CardFooter
                                style={{
                                  position: "absolute",
                                  bottom: 0,
                                  width: "100%",
                                  display: "flex",
                                  flex: 1,
                                  justifyContent: "center",
                                  backgroundColor: "white"
                                }}
                              >
                                <Button
                                  className="text-center"
                                  onClick={async () => {
                                    await this.setState({
                                      stateKarir: this.state.stateKarir.map(
                                        item => {
                                          return { ...item, open: false };
                                        }
                                      )
                                    });

                                    setTimeout(() => {
                                      this.setState({
                                        stateKarir: this.state.stateKarir.map(
                                          (item, stateIndex) => {
                                            if (stateIndex !== index)
                                              return item;
                                            return {
                                              ...item,
                                              open: !item.open
                                            };
                                          }
                                        )
                                      });
                                    }, 1000);
                                    // await this.setState({
                                    //   openedCardIndex: index
                                    // });

                                    // if (index !== this.state.openedCardIndex) {
                                    //   await this.setState({
                                    //     stateKarir
                                    //   })
                                    // }
                                    // await this.setState({
                                    //   stateKarir: this.state.stateKarir.map((item, stateIndex) => {
                                    //     if ()
                                    //   })
                                    // })

                                    // this.state.stateKarir.map(
                                    //   async (item, indexState) => {
                                    //     if (indexState !== index) {
                                    //       await this.setState({
                                    //         stateKarir: { ...item, open: false }
                                    //       });
                                    //     } else {
                                    //       setTimeout(() => {
                                    //         this.setState({
                                    //           stateKarir: {
                                    //             ...item,
                                    //             open: !item.open
                                    //           }
                                    //         });
                                    //       }, 500);
                                    //     }
                                    //   }
                                    // );
                                    // if (indexState !== index) {
                                    //   await this.setState({
                                    //     stateKarir: this.state.stateKarir.map(
                                    //       item => {
                                    //         return { ...item, open: false };
                                    //       }
                                    //     )
                                    //   });
                                    // } else {
                                    //   await this.setState({
                                    //     stateKarir: this.state.stateKarir.map(
                                    //       item => {
                                    //         return { ...item, open: !item.open };
                                    //       }
                                    //     )
                                    //   });
                                    // }
                                  }}
                                >
                                  Show More
                                </Button>
                              </CardFooter>
                            )}
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="cd-section broken-white" id="blogs">
          <div>
            <div
              className="team-1 background-header"
              style={{
                backgroundImage: `url(${bg})`,
                padding: 0
              }}
            >
              <BlurryNavbar />
              <ColoredNavbar location={{ ...this.props.location }} />
              <div className="title title-header">
                {this.props.pageStore.karir.Header}
              </div>
            </div>
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                  <p
                    className="description font-black"
                    style={{ marginTop: "10%", marginBottom: "2%" }}
                  >
                    Berikut ini lowongan kerja yang tersedia di Topgrowth
                    Futures saat ini:
                    {/* {this.props.pageStore.karir.content.title} */}
                  </p>
                  <Row style={{ marginBottom: "10%" }}>
                    <Col md="6">
                      {/* <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("assets/img/karir1.jpg")}
                            />
                          </a>
                        </div>
                      </Card> */}
                      <div
                        style={{
                          marginTop: "30px"
                        }}
                      >
                        <SearchField
                          className="react-search-field-input"
                          placeholder="Cari "
                        />
                      </div>
                    </Col>

                    <Col md="5">
                      {/* <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("assets/img/karir2.jpg")}
                            />
                          </a>
                        </div>
                      </Card> */}
                      {/* <div style={{ maxHeight: "10px" }}> */}
                      <Select
                        styles={customStyles}
                        value="index "
                        options={divisions}
                        value={this.state.dataSelect}
                        onChange={async data => {
                          await this.setState({
                            dataSelect: data
                          });
                        }}
                      />
                      {/* </div> */}
                    </Col>
                    {this.state.stateKarir.map((item, index) => (
                      <Col lg="4" xs="12">
                        <Card
                          className={`card-karir ${item.open ? "expand" : ""}`}
                        >
                          <CardBody>
                            <CardTitle
                              className="text-center"
                              style={{
                                color: "black",
                                fontSize: "1rem",
                                fontWeight: "bold",
                                marginBottom: 10
                              }}
                            >
                              {item.devisi}
                            </CardTitle>
                            <CardSubtitle
                              className="text-center"
                              style={{
                                color: "black",
                                fontSize: "1rem",
                                marginBottom: 30
                              }}
                            >
                              {item.description}
                            </CardSubtitle>
                            <CardText style={{ color: "black" }}>
                              {item.detail.map(itemDetail =>
                                ReactHtmlParser(itemDetail.description)
                              )}
                            </CardText>
                            <CardText style={{ color: "black" }}>
                              {item.detail.map(itemDetail =>
                                ReactHtmlParser(itemDetail.qualification)
                              )}
                            </CardText>
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center"
                              }}
                            ></div>
                          </CardBody>
                          {!item.open && (
                            <CardFooter
                              style={{
                                position: "absolute",
                                bottom: 0,
                                width: "100%",
                                display: "flex",
                                flex: 1,
                                justifyContent: "center",
                                backgroundColor: "white"
                              }}
                            >
                              <Button
                                className="text-center"
                                onClick={async () => {
                                  await this.setState({
                                    stateKarir: this.state.stateKarir.map(
                                      item => {
                                        return { ...item, open: false };
                                      }
                                    )
                                  });

                                  setTimeout(() => {
                                    this.setState({
                                      stateKarir: this.state.stateKarir.map(
                                        (item, stateIndex) => {
                                          if (stateIndex !== index) return item;
                                          return { ...item, open: !item.open };
                                        }
                                      )
                                    });
                                  }, 1000);
                                  // await this.setState({
                                  //   openedCardIndex: index
                                  // });

                                  // if (index !== this.state.openedCardIndex) {
                                  //   await this.setState({
                                  //     stateKarir
                                  //   })
                                  // }
                                  // await this.setState({
                                  //   stateKarir: this.state.stateKarir.map((item, stateIndex) => {
                                  //     if ()
                                  //   })
                                  // })

                                  // this.state.stateKarir.map(
                                  //   async (item, indexState) => {
                                  //     if (indexState !== index) {
                                  //       await this.setState({
                                  //         stateKarir: { ...item, open: false }
                                  //       });
                                  //     } else {
                                  //       setTimeout(() => {
                                  //         this.setState({
                                  //           stateKarir: {
                                  //             ...item,
                                  //             open: !item.open
                                  //           }
                                  //         });
                                  //       }, 500);
                                  //     }
                                  //   }
                                  // );
                                  // if (indexState !== index) {
                                  //   await this.setState({
                                  //     stateKarir: this.state.stateKarir.map(
                                  //       item => {
                                  //         return { ...item, open: false };
                                  //       }
                                  //     )
                                  //   });
                                  // } else {
                                  //   await this.setState({
                                  //     stateKarir: this.state.stateKarir.map(
                                  //       item => {
                                  //         return { ...item, open: !item.open };
                                  //       }
                                  //     )
                                  //   });
                                  // }
                                }}
                              >
                                Show More
                              </Button>
                            </CardFooter>
                          )}
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END BLOGS 5 ********* */}
        </div>
      </>
    );
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore,
  karirList: state.karirStore.karirList
});

const mapDispatchToProps = dispatch => ({
  getContent: (page, lang) => dispatch(getContent(page, lang))

  // fetchPage: (section, lang) => dispatch(fetchPage(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
