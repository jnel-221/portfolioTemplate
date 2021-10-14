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
          {/* <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
        /* <section className="p-5 m-5" id="projects1">
            <h4 className="pb-1 project-text" id="title">Projects1</h4>
            <img src="https://via.placeholder.com/150" alt="placeholder" id="right"></img>
            <p className="project-text">You can create beautiful things</p> 
            <p className="project-text">- but you have to see them in your mind first. We'll play with clouds today. This is truly an almighty mountain. Let's build some happy little clouds up here. Let's have a happy little tree in here. I guess that would be considered a UFO. A big cotton ball in the sky. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. In your imagination you can go anywhere you want. </p>
        </section> */
    )

}

export default Projects1;