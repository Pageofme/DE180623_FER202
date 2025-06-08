// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap-icons/font/bootstrap-icons.css";

// function Header() {
//   return (
//     <div style={{ padding: "1% 10%" }}>
//       <nav class="navbar navbar-expand-lg mx-5">
//         <div class="container-fluid">
//           <a class="navbar-brand text-white fw-bolder" href="#">
//             <h3>Pizza House</h3>
//           </a>

//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <b>
//                   <a
//                     class="nav-link active text-white fw-bolder"
//                     aria-current="page"
//                     href="#"
//                   >
//                     Home
//                   </a>
//                 </b>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link  text-white fw-lighter" href="#">
//                   About Us
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link text-white fw-lighter" href="#">
//                   Contacts
//                 </a>
//               </li>
//             </ul>

//             <form class="d-flex" role="search" style={{ width: "35%" }}>
//               <input
//                 class="form-control "
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button class="btn bg-danger" type="submit">
//                 <i className="bi bi-search text-white"></i>
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;

import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
  return (
    <div style={{ padding: "1% 10%" }}>
      <Navbar expand="lg" className="mx-5">
        <Container fluid>
          <Navbar.Brand href="#" className="text-white fw-bolder">
            <h3>Pizza House</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent ">
            <i className="bi bi-list text-warning fs-3"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link href="#" className="text-white fw-bolder active">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="text-white fw-lighter">
                About Us
              </Nav.Link>
              <Nav.Link href="#" className="text-white fw-lighter">
                Contacts
              </Nav.Link>
            </Nav>
            <Form className="d-flex" style={{ width: "35%" }}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="danger" type="submit">
                <i className="bi bi-search text-white"></i>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
