import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

const newsList = [
  {
    id: 1,
    title:
      "Woman bakes expletive-laden pies to ‘get a rise’ out of her grandmother in annual tradition",
    description:
      "“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.",
    images: "images/1.jpg",
  },
  {
    id: 2,
    title:
      "Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans",
    description:
      "Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.",
    images: "images/2.jpg",
  },
  {
    id: 3,
    title: "Burger King is testing a new breakfast sandwich",
    description: "This is a win for the flatbread fans.",
    images: "images/3.jpg",
  },
  {
    id: 4,
    title: "Popeyes permanently adds chicken wings to its menu",
    description: "And you can get ’em in five different flavors.",
    images: "images/4.jpg",
  },
  {
    id: 5,
    title: "Top salmon with a sizzling mix of aromatics and spices",
    description:
      "Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.",
    images: "images/5.jpg",
  },
  {
    id: 6,
    title: "80 Christmas dinner ideas for the ultimate holiday feast",
    description:
      "Build the perfect Christmas menu with these delicious recipes.",
    images: "images/6.jpg",
  },
  {
    id: 7,
    title: "How to make the easiest prime rib roast for the holidays",
    description:
      "Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.",
    images: "images/7.jpg",
  },
  {
    id: 8,
    title: "Turn leftover turkey into a flavorful Waldorf salad",
    description:
      "This light, bright turkey salad is the best post-Thanksgiving lunch.",
    images: "images/8.jpg",
  },
];

function News() {
  return (
    <Container>
      <h2 className="mt-4 text-danger">News Category</h2>
      <Row>
        {newsList.map((item) => (
          <Col md={4} key={item.id} className="mb-4 d-flex">
            <Card className="w-100 h-100">
              <Card.Img
                variant="top"
                src={item.images}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title style={{ fontSize: "1rem", fontWeight: "600" }}>
                  {item.title}
                </Card.Title>
                <Card.Text
                  className="flex-grow-1"
                  style={{ fontSize: "0.9rem" }}
                >
                  {item.description}
                </Card.Text>
                {/* Link bài viết (giống bài trước) */}
                <a href="#" style={{ fontSize: "0.9rem", color: "#0d6efd" }}>
                  {item.title}
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default News;
