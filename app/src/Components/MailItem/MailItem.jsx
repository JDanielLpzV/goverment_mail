import React from "react";
import ReactDOM from "react-dom";
import "./MailItem.css";

class MailItem extends React.Component {
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return <div>Mail Item</div>;
  }
}
ReactDOM.render(<MailItem />, document.getElementById("root"));
export default MailItem;
