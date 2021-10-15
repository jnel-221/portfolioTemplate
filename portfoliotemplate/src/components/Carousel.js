import React from "react";
import { Carousel } from "react-bootstrap";
import testimonials from "../components/testimonial.json";

const CarouselComponent = () => {
  return (
    <Carousel fade>
      {testimonials.map((testimonial, i) => (
        <Carousel.Item key={i}>
          <img
            className="d-block w-25"
            src="https://via.placeholder.com/150"
            alt="slide"
            id={testimonial.imgId}
          />
          <Carousel.Caption>
            <h3>{testimonial.testimonial}</h3>
            <p>-{testimonial.name}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;