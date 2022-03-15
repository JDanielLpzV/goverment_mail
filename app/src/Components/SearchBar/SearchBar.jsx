import React from "react";
import ReactDOM from "react-dom";
import "./SearchBar.css";
class SearchBar extends React.Component {
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return <div className="text-center">Buscar en toda la correspondencia</div>;
  }
}
ReactDOM.render(<SearchBar />, document.getElementById("root"));
export default SearchBar;
