import React from "react";
import ReactDOM from "react-dom";
import "./SideBar.css";

class SideBar extends React.Component {
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return <div>Side Bar</div>;
  }
}
ReactDOM.render(<SideBar />, document.getElementById("root"));
export default SideBar;
