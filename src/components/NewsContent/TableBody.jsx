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
import { Link } from "react-router-dom";
import "../../assets/css/main.css";

const textTable = {
  color: "white",
  textAlign: "center"
};

class TableBody extends React.Component {
  render() {
    const {
      time,
      flag,
      currency,
      event,
      actual,
      forecast,
      previous
    } = this.props;
    return (
      <tbody>
        {/* <Link
          to={`/newspage/${time}`}
          state={{
            data: {
              time
            }
          }}
        > */}
        <tr className="even">
          <td>
            <Link
              to={`/newspage/${time}`}
              state={{
                data: {
                  time
                }
              }}
            >
              <div style={textTable} className="text-center">
                > {time}
              </div>
            </Link>
          </td>
          <td className="text-center">
            {/* <div className="img-container"> */}
            <img
              className="content-center"
              src={flag}
              style={{
                height: "25px",
                width: "40px",
                marginRight: "10px"
              }}
            />
            {currency}
          </td>
          <td>{event}</td>
          <td style={textTable} className="text-center">
            {actual}
          </td>
          <td style={textTable} className="text-center">
            {forecast}
          </td>
          <td style={textTable} className="text-center">
            {previous}
          </td>
        </tr>
        {/* </Link> */}
      </tbody>
    );
  }
}

export default TableBody;
