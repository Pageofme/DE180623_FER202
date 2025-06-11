import React, { useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function DragAndDropList() {
  const [items, setItems] = useState(["Item A", "Item B", "Item C"]);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDrop = (index) => {
    if (draggedIndex === null || draggedIndex === index) return;
    const newItems = [...items];
    const draggedItem = newItems.splice(draggedIndex, 1)[0];
    newItems.splice(index, 0, draggedItem);
    setItems(newItems);
    setDraggedIndex(null);
  };

  return (
    <Container className="mt-5">
      <h4 className="mb-3 text-white">Drag and Drop List</h4>
      <ListGroup>
        {items.map((item, index) => (
          <ListGroup.Item
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
            className="mb-2"
            style={{
              cursor: "grab",
              backgroundColor: "#343a40",
              color: "white",
              border: "1px solid #495057",
            }}
          >
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default DragAndDropList;
