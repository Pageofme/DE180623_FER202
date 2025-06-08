import React from "react";
import { Carousel } from "react-bootstrap";

// Cách xử lý hình ảnh (nếu dùng từ public folder)
const images = [
  {
    src: "/pizza1.jpg",
    title: "Neapolitan Pizza",
    text: "If you are looking for a traditional Italian pizza, the Neapolitan is the best option!",
  },
  {
    src: "/pizza2.jpg",
    title: "Second slide label",
    text: "Some representative placeholder content for the second slide.",
  },
  {
    src: "/pizza3.jpg",
    title: "Third slide label",
    text: "Some representative placeholder content for the third slide.",
  },
  {
    src: "/pizza4.jpg",
    title: "Fourth slide label",
    text: "Some representative placeholder content for the fourth slide.",
  },
  {
    src: "/pizza5.jpg",
    title: "Fifth slide label",
    text: "Some representative placeholder content for the fifth slide.",
  },
];

function PizzaCarousel() {
  return (
    <Carousel>
      {images.map((img, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={img.src}
            alt={`Slide ${idx + 1}`}
          />
          <Carousel.Caption>
            <h5>{img.title}</h5>
            <p>{img.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default PizzaCarousel;
