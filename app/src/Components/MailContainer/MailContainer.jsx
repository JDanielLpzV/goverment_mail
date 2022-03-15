import React from "react";
import ReactDOM from "react-dom";
import "./MailContainer.css";
import MailItem from "../MailItem/MailItem";

class MailContainer extends React.Component {
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return (
      <div id="container" className="container">
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
      </div>
    );
  }
}
ReactDOM.render(<MailContainer />, document.getElementById("root"));
export default MailContainer;
