import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/main.css";

const textTable = {
  color: "black",
  fontSize: "1rem",
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
      <tbody style={{ backgroundColor: "#D1D1D1" }}>
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
          <td className="text-center" style={textTable}>
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
          <td style={textTable}>{event}</td>
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
