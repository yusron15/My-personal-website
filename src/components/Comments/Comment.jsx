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
// ReactJS plugin for a nice carousel
import Slick from "react-slick";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Input,
  Media,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.jsx";
import DemoFooter from "components/Footers/DemoFooter.jsx";

class Comment extends React.Component {
  render() {
    return (
      <>
        <div className="section section-comments">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <div className="media-area">
                  <h3 className="title text-center">3 Comments</h3>
                  <Media>
                    <a
                      className="pull-left"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <div className="avatar">
                        <Media
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/james.jpg")}
                        />
                      </div>
                    </a>
                    <Media body>
                      <Media heading tag="h5">
                        Tina Andrew{" "}
                        <small className="text-muted">· 7 minutes ago</small>
                      </Media>
                      <p>
                        Chance too good. God level bars. I'm so proud of
                        @LifeOfDesiigner #1 song in the country. Panda! Don't be
                        scared of the truth because we need to restart the human
                        foundation in truth I stand with the most humility. We
                        are so blessed!
                      </p>
                      <p>
                        All praises and blessings to the families of people who
                        never gave up on dreams. Don't forget, You're Awesome!
                      </p>
                      <div className="media-footer">
                        <Button
                          className="btn-simple pull-right"
                          color="primary"
                          href="#pablo"
                          id="tooltip341431465"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          <i className="tim-icons icon-send" /> Reply
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip341431465"
                        >
                          Reply to Comment
                        </UncontrolledTooltip>
                        <Button
                          className="btn-simple pull-right"
                          color="danger"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          <i className="tim-icons icon-heart-2" /> 243
                        </Button>
                      </div>
                    </Media>
                  </Media>
                  <Media>
                    <a
                      className="pull-left"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <div className="avatar">
                        <Media
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/michael.jpg")}
                        />
                      </div>
                    </a>
                    <Media body>
                      <Media heading tag="h5">
                        John Camber{" "}
                        <small className="text-muted">· Yesterday</small>
                      </Media>
                      <p>
                        Hello guys, nice to have you on the platform! There will
                        be a lot of great stuff coming soon. We will keep you
                        posted for the latest news.
                      </p>
                      <p>Don't forget, You're Awesome!</p>
                      <div className="media-footer">
                        <Button
                          className="btn-simple pull-right"
                          color="primary"
                          href="#pablo"
                          id="tooltip871944617"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          <i className="tim-icons icon-send" /> Reply
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip871944617"
                        >
                          Reply to Comment
                        </UncontrolledTooltip>
                        <Button
                          className="btn-simple pull-right"
                          color="danger"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          <i className="tim-icons icon-heart-2" /> 243
                        </Button>
                      </div>
                      <Media>
                        <a
                          className="pull-left"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <div className="avatar">
                            <Media
                              alt="..."
                              className="img-raised"
                              src={require("assets/img/julie.jpg")}
                            />
                          </div>
                        </a>
                        <Media body>
                          <Media heading tag="h5">
                            Tina Andrew{" "}
                            <small className="text-muted">· 2 Days Ago</small>
                          </Media>
                          <p>
                            Hello guys, nice to have you on the platform! There
                            will be a lot of great stuff coming soon. We will
                            keep you posted for the latest news.
                          </p>
                          <p>Don't forget, You're Awesome!</p>
                          <div className="media-footer">
                            <Button
                              className="btn-simple pull-right"
                              color="primary"
                              href="#pablo"
                              id="tooltip442113005"
                              onClick={e => e.preventDefault()}
                              size="sm"
                            >
                              <i className="tim-icons icon-send" /> Reply
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip442113005"
                            >
                              Reply to Comment
                            </UncontrolledTooltip>
                            <Button
                              className="btn-simple pull-right"
                              color="danger"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                              size="sm"
                            >
                              <i className="tim-icons icon-heart-2" /> 243
                            </Button>
                          </div>
                        </Media>
                      </Media>
                    </Media>
                  </Media>
                </div>
                <h3 className="title text-center">Post your comment</h3>
                <Media className="media-post">
                  <a
                    className="pull-left author"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <div className="avatar">
                      <Media
                        alt="..."
                        className="img-raised"
                        src={require("assets/img/olivia.jpg")}
                      />
                    </div>
                  </a>
                  <Media body>
                    <Input
                      placeholder="Write a nice reply or go home..."
                      rows="4"
                      type="textarea"
                    />
                    <div className="media-footer">
                      <Button
                        className="pull-right"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Reply
                      </Button>
                    </div>
                  </Media>
                </Media>
                {/* end media-post */}
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Comment;
