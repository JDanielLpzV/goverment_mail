import React from "react";
import ReactDOM from "react-dom";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import Categories from "../Categories/Categories";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { area: "Principal" };
  }
  render() {
    return (
      <div id="main" className="container">
        <SearchBar />
        <div className="fs-4">{this.state.area}</div>
        <Categories />
      </div>
    );
  }
}
ReactDOM.render(<Header />, document.getElementById("root"));
export default Header;
