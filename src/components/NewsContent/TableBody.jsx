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

import "../../assets/css/main.css";

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
        <tr className="even">
          <td>
            <div className="text-center">> {time}</div>
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
          <td className="text-center">{actual}</td>
          <td className="text-center">{forecast}</td>
          <td className="text-center">{previous}</td>
        </tr>
      </tbody>
    );
  }
}

export default TableBody;
