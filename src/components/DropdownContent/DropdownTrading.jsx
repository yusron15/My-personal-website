import React from "react";
import { slideInDown } from "react-animations";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { LangContext } from "../MyContext";
import "../../assets/css/main.css";
import vl from "../../assets/img/vertical-line.png";

const title = {
  fontSize: "15px",
  fontWeight: "bold",
  color: "black",
  marginTop: "15px",
  marginBottom: "10px"
};

const trading = {
  fontSize: "15px",
  // fontWeight: "bold",
  color: "black",
  marginTop: "10px",
  // marginBottom: "10px",
  textAlign: "left"
};

const DropdownTradingText = {
  fontSize: "15px",
  // fontWeight: "bold",
  color: "black",
  marginTop: "5px",
  // marginBottom: "10px",
  textAlign: "left"
};

class DropdownTrading extends React.Component {
  render() {
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <div
              className="broken-white"
              style={{
                position: "absolute",
                top: 93,
                left: 0,
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-around",
                minWidth: "100vw",
                height: "120px",
                display: "flex"
              }}
            >
              <div className="dropdown-contents">
                <div>
                  <div style={DropdownTradingText}>
                    <div style={{ marginLeft: "10%" }}>
                      <div style={title}>
                        {lang.Header.m3.dropdown[0].title}
                      </div>
                    </div>
                  </div>
                  <Row>
                    <div style={{ marginLeft: "40px", marginTop: 0 }}>
                      <div style={DropdownTradingText}>
                        <Link className="font-black" to="/forex">
                          {lang.Header.m3.dropdown[0].sub[0]}
                        </Link>
                      </div>
                      <div style={DropdownTradingText}>
                        <Link className="font-black" to="/cfd">
                          {lang.Header.m3.dropdown[0].sub[1]}
                        </Link>
                      </div>
                    </div>

                    <div style={{ marginLeft: "20px" }}>
                      <div style={DropdownTradingText}>
                        <Link className="font-black" to="/komoditi">
                          {lang.Header.m3.dropdown[0].sub[3]}
                        </Link>
                      </div>
                      <div style={DropdownTradingText}>
                        <Link className="font-black" to="/gold">
                          {lang.Header.m3.dropdown[0].sub[2]}
                        </Link>
                      </div>
                    </div>

                    <div style={{ marginLeft: "20px" }}>
                      <div style={DropdownTradingText}>
                        <Link className="font-black" to="/index-futures">
                          {lang.Header.m3.dropdown[0].sub[4]}
                        </Link>
                      </div>
                    </div>
                  </Row>
                </div>

                {/* <Row>
                    <Col>
                      <Link
                        style={DropdownTradingText}
                        className="vertical-space"
                        to="/komoditi"
                      >
                        {lang.Header.m3.dropdown[0].sub[3]}
                      </Link>
                      <Link
                        style={DropdownTradingText}
                        className="vertical-space"
                        to="/gold"
                      >
                        {lang.Header.m3.dropdown[0].sub[2]}
                      </Link>
                    </Col>
                    <Col style={{ minWidth: "10vw" }}>
                      <Link
                        style={DropdownTradingText}
                        className="vertical-space"
                        to="/index-futures"
                      >
                        {lang.Header.m3.dropdown[0].sub[4]}
                      </Link>
                    </Col>
                  </Row> */}
                {/* </div> */}
              </div>
              <div className="dropdown-contents">
                <div class="row">
                  <div>
                    <img className="vl-img-trading" src={vl} />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <div style={title}>{lang.Header.m3.dropdown[1].title}</div>
                    <Link
                      style={trading}
                      className="vertical-space"
                      to="/jam-perdagangan"
                    >
                      {lang.Header.m3.dropdown[1].sub[0]}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="dropdown-contents">
                <div class="row">
                  <div>
                    <img className="vl-img-trading" src={vl} />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <div style={title}>{lang.Header.m3.dropdown[2].title}</div>
                    <div style={DropdownTradingText}>
                      <Link className="font-black" to="/pro-trader">
                        {lang.Header.m3.dropdown[2].sub[0]}
                      </Link>
                    </div>
                    <div style={DropdownTradingText}>
                      <Link className="font-black" to="/topgrowth-trader">
                        {lang.Header.m3.dropdown[2].sub[1]}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown-contents">
                <div class="row">
                  <div>
                    <img className="vl-img-trading" src={vl} />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <div style={title}>{lang.Header.m3.dropdown[3].title}</div>
                    <div style={DropdownTradingText}>
                      <Link className="font-black" to="/login">
                        {lang.Header.m3.dropdown[3].sub[0]}
                      </Link>
                    </div>
                    <div style={DropdownTradingText}>
                      <Link className="font-black" to="/register">
                        {lang.Header.m3.dropdown[3].sub[1]}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </LangContext.Consumer>
    );
  }
}

export default DropdownTrading;
