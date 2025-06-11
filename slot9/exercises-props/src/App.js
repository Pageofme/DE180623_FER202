// import "./App.css";
// import Welcome from "./components/Welcome";

// function App() {
//   return (
//     <>
//       <Welcome name="traltb@fe.edu.vn" />
//       <Welcome name="fptdn@fe.edu.vn" />
//     </>
//   );
// }

// export default App;

// import "./App.css";
// import UserProfile from "./components/UserProfile";
// import Welcome from "./components/Welcome";

// function App() {
//   const userData = { name: "traltb@fe.edu.vn", age: 39 };
//   return (
//     <>
//       <Welcome name="traltb@fe.edu.vn" />
//       <UserProfile user={userData} />
//     </>
//   );
// }

// export default App;

// import NameList from "./components/NameList";
// import UserProfile from "./components/UserProfile";
// import Welcome from "./components/Welcome";

// function App() {
//   const userData = { name: "traltb@fe.edu.vn", age: 39 };
//   const namesList = ["traltb@fe.edu.vn", "test@fe.edu.vn"];
//   return (
//     <>
//       <Welcome name="traltb@fe.edu.vn" />
//       <UserProfile user={userData} />
//       <NameList names={namesList} />
//     </>
//   );
// }

// export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import NameList from "./components/NameList";
import UserProfile from "./components/UserProfile";
import Welcome from "./components/Welcome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// Dùng Container, Row, Col để bố trí các Card
import StudentCard from "./components/StudentCard"; // Import StudentCard component

function App() {
  const userData = { name: "traltb@fe.edu.vn", age: 39 };
  const namesList = ["traltb@fe.edu.vn", "test@fe.edu.vn"];
  //Danh sach students
  const students = [
    {
      name: "Hoang",
      age: 39,
      avatar: "/images/student1.jpg",
      address: "Viet Nam",
    },
    {
      name: "Heo",
      age: 40,
      avatar: "/images/student2.jpg",
      address: "Viet Nam",
    },
    {
      name: "Meo",
      age: 41,
      avatar: "/images/student3.jpg",
      address: "Viet Nam",
    },
  ];
  return (
    <>
      <Welcome name="traltb@fe.edu.vn" />
      <UserProfile user={userData} />
      <NameList names={namesList} />
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {/*Duyệt qua mảng students và truyền từng đối tượng student vào Student Card*/}
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
