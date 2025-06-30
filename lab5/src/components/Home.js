import React from "react";
import { Carousel, Container } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Carousel className="mt-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner.png"
            alt="First slide"
            style={{ height: "600px", objectFit: "contain" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner2.jpg"
            alt="Second slide"
            style={{ height: "600px", objectFit: "contain" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner3.jpg"
            alt="Second slide"
            style={{ height: "600px", objectFit: "contain" }}
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Home;
