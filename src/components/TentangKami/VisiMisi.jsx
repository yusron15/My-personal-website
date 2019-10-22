/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
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
      <>
        <div className="cd-section" id="projects">
          <div className="projects-3" style={{backgroundImage:"url(" + require("assets/img/visimisi.png") + ")", backgroundSize:"cover",backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
            <Container>
              <div className="space-50" />
              <Row>
                <Col md="6">
                  {/* <Card className="card-blog card-plain"> */}
                    {/* <CardHeader> */}
                      <h2 className="title">VISI KAMI</h2>
                    {/* </CardHeader> */}
                    {/* <div className="card-image"> */}
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      </p>
                    {/* </div> */}
                  {/* </Card> */}
                </Col>
                <Col md="6">
                  {/* <Card className="card-blog card-plain"> */}
                    {/* <CardHeader> */}
                      <h2 className="title">MISI KAMI</h2>
                    {/* </CardHeader> */}
                    {/* <div className="card-image"> */}
                    <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      </p>
                    {/* </div> */}
                  {/* </Card> */}
                </Col>
              </Row>
              <div className="space-50" />
            </Container>
          </div>
        </div>{" "}
      </>
    );
  }
}

export default VisiMisi;
