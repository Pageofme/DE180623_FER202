// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [status, setStatus] = useState("");

//   const navigate = useNavigate(); // Khởi tạo useNavigate để chuyển hướng

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newPost = {
//       title,
//       content,
//     };

//     try {
//       // Gửi yêu cầu POST để tạo bài viết mới
//       await axios.post("http://localhost:3000/posts", newPost);
//       setStatus("Bài viết đã được tạo thành công!");
//       setTitle(""); // Clear input fields
//       setContent("");

//       // Chuyển hướng đến trang ListPost sau khi tạo bài viết thành công
//       navigate("/"); // Giả sử ListPost là trang trang chủ, thay đổi theo yêu cầu thực tế của bạn
//     } catch (error) {
//       setStatus("Có lỗi xảy ra khi tạo bài viết.");
//       console.error("Lỗi khi tạo bài viết:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Thêm bài viết mới</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Tiêu đề"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br />
//         <br />
//         <textarea
//           placeholder="Nội dung"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//         <br />
//         <button type="submit">Tạo bài viết</button>
//       </form>
//       <p>{status}</p>
//     </div>
//   );
// };

// export default CreatePost;

import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CreatePost = ({ title, content, status, error }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const [newStatus, setNewStatus] = useState(status);
  const [newError, setNewError] = useState(error);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTitle || !newContent) {
      setNewError("Tiêu đề và nội dung không được để trống.");
      return;
    }

    const newPost = { title: newTitle, content: newContent };
    try {
      await axios.post("http://localhost:3000/posts", newPost);
      setNewStatus("Bài viết đã được tạo thành công!");
      navigate("/");
    } catch (error) {
      setNewError("Có lỗi xảy ra khi tạo bài viết.");
    }
  };

  return (
    <div>
      <h1>Thêm bài viết mới</h1>
      {newError && <Alert variant="danger">{newError}</Alert>}
      {newStatus && <Alert variant="success">{newStatus}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tiêu đề"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="content" className="mt-3">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Nhập nội dung bài viết"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Tạo bài viết
        </Button>
      </Form>
    </div>
  );
};

// Sử dụng PropTypes để validate dữ liệu
CreatePost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  status: PropTypes.string,
  error: PropTypes.string,
};

export default CreatePost;
