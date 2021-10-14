import React from "react";
import { Card } from "react-bootstrap";
import "../css/componentCSS/Projects1.css";


const Projects1 = () => {

    return(

        <Card className="p-5 m-5" id="projects1">
        <Card.Body>
          <Card.Title className="pb-2 project-text" id="title">Projects1</Card.Title>
          <Card.Img
            variant="right"
            src="https://via.placeholder.com/150"
            alt="placeholder"
            id="right"
          />
          <Card.Text>
            <p className="project-text">How do you make a round circle with a square knife?</p>
            <p className="project-text">
              That's your challenge for the day. You can get away with a lot.
              We'll do another happy little painting. You gotta think like a tree.
              Water's like me. It's laaazy ... Boy, it always looks for the
              easiest way to do things Let's make a happy little mountain now.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    )

}

export default Projects1;