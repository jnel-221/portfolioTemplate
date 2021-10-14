import React from "react";
import { Card } from "react-bootstrap";
import "../css/componentCSS/Projects1.css";

const Projects1 = () => {
  return (
    <Card className="p-5 m-5" id="projects1">
      <Card.Body>
        <Card.Title className="pb-2" id="title">
          Happy Trees
        </Card.Title>
        <Card.Img
          variant="right"
          src="https://via.placeholder.com/150"
          alt="placeholder"
          id="right"
        />
        <Card.Text>
          <p>You have freedom here.</p>
          <p>
            The only guide is your heart. If we're going to have animals around
            we all have to be concerned about them and take care of them. You
            can spend all day playing with mountains. Just let this happen. We
            just let this flow right out of our minds..
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Projects1;
