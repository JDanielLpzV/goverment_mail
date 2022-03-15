import React from "react";
import ReactDOM from "react-dom";
import "./Categories.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
class Categories extends React.Component {
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return (
      <ButtonGroup aria-label="Basic example">
        <Button variant="success">Importantes</Button>
        <Button variant="primary">Circulares</Button>
        <Button variant="warning">Paquetería</Button>
        <Button variant="danger">Oficios</Button>
      </ButtonGroup>
    );
  }
}
ReactDOM.render(<Categories />, document.getElementById("root"));
export default Categories;
