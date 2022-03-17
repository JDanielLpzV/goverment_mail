import React from "react";
import "./MailItem.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MailItem({ author, subject, content, area }) {
  return (
    <Container fluid className="item">
      <Row>
        <Col>
          <p className="author">{author}</p>
        </Col>
        <Col>
          <p className="status text-end">{area}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="subject">{subject}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{content}</p>
        </Col>
      </Row>
    </Container>
  );
}
