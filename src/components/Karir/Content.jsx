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
  Col
} from "reactstrap";
import { isMobile } from "react-device-detect";
import SearchField from "react-search-field";
import Select from "react-select";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar";
import bg from "../../assets/img/header-karir.png";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import ReactSearchBox from "react-search-box";
import "../../assets/css/main.css";

const searchStyle = {
  minWidth: "100vw"
};

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
    dataSelect: ""
  };

  renderContent = () => {
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
                        {/* <SearchField
                          styles={searchStyle}
                          className="react-search-field-input"
                          placeholder="Cari "
                        /> */}
                        <ReactSearchBox
                          style={{ color: "black" }}
                          placeholder="Search"
                          value="Doe"
                          data={data}
                          callback={record => console.log(record)}
                        />
                      </Col>

                      <Col md="5">
                        <Select
                          styles={customStyles}
                          value="index "
                          options={[
                            {
                              label: "Job Example",
                              value: "Job Example"
                            },
                            {
                              label: "Job Example",
                              value: "Job Example"
                            },
                            {
                              label: "Job Example",
                              value: "Job Example"
                            }
                          ]}
                          value={this.state.dataSelect}
                          onChange={async data => {
                            await this.setState({
                              dataSelect: data
                            });
                            let dataSelect = [
                              {
                                label: "Job Example",
                                value: "Job Example"
                              },
                              {
                                label: "Job Example",
                                value: "Job Example"
                              },
                              {
                                label: "Job Example",
                                value: "Job Example"
                              }
                            ];
                            return dataSelect.filter(
                              item => this.state.dataSelect.value === item.value
                            )[0];
                          }}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>{" "}
        </>
      );
    }
    return (
      <>
        <div className="cd-section broken-white" id="blogs">
          {/* ********* END BLOGS 5 ********* */}

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
              <div className="title title-header">Karir</div>
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
                      {/* <div style={{ height: "10px" }}> */}
                      <SearchField
                        className="react-search-field-input"
                        placeholder="Cari "
                      />
                      {/* </div> */}
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
                        // styles={{
                        //   control: styles => ({
                        //     ...styles,
                        //     height: "10px"
                        //   }),
                        //   option: () => ({
                        //     zIndex: 999
                        //   })
                        // }}
                        styles={customStyles}
                        value="index "
                        options={[
                          {
                            label: "Job Example",
                            value: "Job Example"
                          },
                          {
                            label: "Job Example",
                            value: "Job Example"
                          },
                          {
                            label: "Job Example",
                            value: "Job Example"
                          }
                        ]}
                        value={this.state.dataSelect}
                        onChange={async data => {
                          await this.setState({
                            dataSelect: data
                          });
                          let dataSelect = [
                            {
                              label: "Job Example",
                              value: "Job Example"
                            },
                            {
                              label: "Job Example",
                              value: "Job Example"
                            },
                            {
                              label: "Job Example",
                              value: "Job Example"
                            }
                          ];
                          return dataSelect.filter(
                            item => this.state.dataSelect.value === item.value
                          )[0];
                        }}
                      />
                      {/* </div> */}
                    </Col>

                    {/* <Col lg="4" xs="12">
                      <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("assets/img/newscard.png")}
                            />
                          </a>
                        </div>
                      </Card>
                    </Col> */}
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END BLOGS 5 ********* */}
        </div>{" "}
      </>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default Blogs;
