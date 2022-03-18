import React from "react";
import "./SideBar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SideBar({ setSelectedMode }) {
  const OnButtonClick = (mode) => {
    setSelectedMode(mode);
  };
  return (
    <Container fluid className="side-bar">
      <Row>
        <Col xs={12}>
          <button onClick={() => OnButtonClick("Principal")}>Principal</button>
        </Col>
      </Row>
      <Row>
        <Col>
          <button onClick={() => OnButtonClick("Enviados")}>Enviados</button>
        </Col>
      </Row>
      <Row>
        <Col>
          <button onClick={() => OnButtonClick("Recibidos")}>Recibidos</button>
        </Col>
      </Row>
      <Row>
        <Col>
          <button onClick={() => OnButtonClick("Historico")}>Historico</button>
        </Col>
      </Row>
    </Container>
  );
}
