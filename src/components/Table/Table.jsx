import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";
import "../../assets/css/main.css";

const text = {
  color: "black",
  textAlign: "center",
  fontSize: "1rem"
};

export class TableContent2 extends React.Component {
  render() {
    const { prefix1, prefix2 } = this.props;
    return (
      <tbody style={{ backgroundColor: "#D1D1D1" }}>
        <tr>
          <td style={text}>{prefix1}</td>
          <td style={text}>{prefix2}</td>
        </tr>
      </tbody>
    );
  }
}

export class TableContent3 extends React.Component {
  render() {
    const { prefix1, prefix2, prefix3 } = this.props;
    return (
      <tbody style={{ backgroundColor: "#D1D1D1" }}>
        <tr>
          <td style={text}>{prefix1}</td>
          <td style={text}>{prefix2}</td>
          <td style={text}>{prefix3}</td>
        </tr>
      </tbody>
    );
  }
}

export class TableContent4 extends React.Component {
  render() {
    const { prefix1, prefix2, prefix3, prefix4 } = this.props;
    return (
      <tbody style={{ backgroundColor: "#D1D1D1" }}>
        <tr>
          <td style={text}>{prefix1}</td>
          <td style={text}>{prefix2}</td>
          <td style={text}>{prefix3}</td>
          <td style={text}>{prefix4}</td>
        </tr>
      </tbody>
    );
  }
}

export class TableContent5 extends React.Component {
  render() {
    const { prefix1, prefix2, prefix3, prefix4, prefix5 } = this.props;
    return (
      <tbody style={{ backgroundColor: "#D1D1D1" }}>
        <tr>
          <td style={text}>{prefix1}</td>
          <td style={text}>{prefix2}</td>
          <td style={text}>{prefix3}</td>
          <td style={text}>{prefix4}</td>
          <td style={text}>{prefix5}</td>
        </tr>
      </tbody>
    );
  }
}
