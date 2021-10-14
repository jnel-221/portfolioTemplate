import React from "react";
import { Card } from "react-bootstrap";
import "../css/componentCSS/About.css";

const About = () => {
  return (
    <Card className="p-5 m-5" id="about">
      <Card.Body>
        <Card.Title className="pb-2">About Me</Card.Title>
        <Card.Img
          variant="left"
          src="https://via.placeholder.com/150"
          alt="placeholder"
          id="left"
        />
        <Card.Text>
          <p>How do you make a round circle with a square knife?</p>
          <p>
            {" "}
            That's your challenge for the day. You can get away with a lot.
            We'll do another happy little painting. You gotta think like a tree.
            Water's like me. It's laaazy ... Boy, it always looks for the
            easiest way to do things Let's make a happy little mountain now.
          </p>
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
};

export default About;
