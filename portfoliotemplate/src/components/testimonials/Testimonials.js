import React from "react";
import {Card, Row, Col} from "react-bootstrap";
import testimonials from "../testimonial.json";


const Testimonials = (props) => {

    return (
        <>
        <h2 className="text-center page-title">Testimonials</h2>
        <hr></hr>
        <Row xs={1} md={2} className="g-4 px-4 mb-5">
       
        {testimonials.map((review, idx) => (
          <Col key={idx}>
            <Card id="connect">
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body>
                <Card.Title>{review.title}</Card.Title>
                <Card.Text>
                  {review.testimonial}
                  <br></br>
                  -{review.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </>
    )
}

export default Testimonials;