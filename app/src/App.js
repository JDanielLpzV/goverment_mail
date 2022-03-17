// import logo from './logo.svg';
import "./App.css";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import NavBar from "./Components/NavBar/NavBar";
import MailContainer from "./Components/MailContainer/MailContainer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useState } from "react";

function App() {
  const [selectedMode, setSelectedMode] = useState("Principal");
  return (
    <Container fluid>
      <Row>
        <Col>
          <NavBar xs md lg="12" />
        </Col>
      </Row>
      <Row>
        <Col className="side" xs md lg="2">
          <SideBar setSelectedMode={setSelectedMode} />
        </Col>
        <Col xs={10}>
          <Header selectedMode={selectedMode} />
          <MailContainer selectedMode={selectedMode} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
