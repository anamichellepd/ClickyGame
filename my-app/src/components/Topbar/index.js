import React from "react";

import "./style.css";

function Topbar(props) {
  return (
    <Container fluid className="top">
      <Row>
        <Col>
          <a className="home-button" href="#home">
            ClickyGame!
          </a>
        </Col>
        <Col className="instructions">Click an image to begin!</Col>
        <Col>
          <div className="score">
            Score:________________ | Top score:_______________________
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Topbar;
