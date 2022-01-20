import React from "react";
import { Card } from "react-bootstrap";
import "./styles.css";

function Footer() {
  return (
    <Card className="footer">
      <Card.Header className="footer-header">
        Made with love - Ben, Dilan, Blessing, Caesar and Simon
      </Card.Header>
      <Card.Body className="footer-body">
        <blockquote className="title">
          <p>
            &copy;{new Date().getFullYear()} Recipr | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Footer;
