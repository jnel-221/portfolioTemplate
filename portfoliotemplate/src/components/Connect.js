import React from "react";
import { Card, Button } from "react-bootstrap";
import "../css/componentCSS/Connect.css";

const Connect = () => {
  return (
    <Card className="p-5 m-5" id="connect">
      <Card.Body>
        <Card.Title className="pb-2 text-center">Let's Connect</Card.Title>
        <br></br>
        <Card.Text>
          <p className="text-center">
            Maybe there's a happy little waterfall happening over here. At home
            you have unlimited time. You can work and carry-on and put lots of
            little happy things in here.
          </p>
        </Card.Text>
        <div className="text-center">
          <Button variant="contact" className="mb-5 my-3">
            Contact
          </Button>
          <br></br>
          {/* <i className="fab fa-linkedin-in fa-3x mx-4"></i> */}
          <i className="fab fa-twitter fa-3x mx-4"></i>
          <i className="fab fa-instagram fa-3x mx-4"></i>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Connect;


