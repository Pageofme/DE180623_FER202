// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";

// const EditPost = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [status, setStatus] = useState("");
//   const { id } = useParams(); // Lấy id từ URL
//   const navigate = useNavigate(); // Điều hướng sau khi cập nhật

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/posts/${id}`);
//         if (response.data) {
//           setTitle(response.data.title);
//           setContent(response.data.content);
//         } else {
//           console.error(`Không tìm thấy bài viết với id ${id}`);
//         }
//       } catch (error) {
//         console.error("Lỗi khi lấy bài viết:", error);
//       }
//     };

//     fetchPost(); // Lấy dữ liệu bài viết cần chỉnh sửa
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const updatedPost = {
//       title,
//       content,
//     };

//     try {
//       const response = await axios.put(
//         `http://localhost:3000/posts/${id}`,
//         updatedPost
//       );
//       if (response.status === 200) {
//         setStatus("Bài viết đã được cập nhật!");
//         setTitle(""); // Clear input fields
//         setContent("");
//         navigate("/"); // Quay lại trang danh sách bài viết sau khi cập nhật
//       }
//     } catch (error) {
//       setStatus("Có lỗi xảy ra khi cập nhật bài viết.");
//       console.error("Lỗi khi cập nhật bài viết:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Chỉnh sửa bài viết</h1>
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
//         <button type="submit">Cập nhật bài viết</button>
//       </form>
//       <p>{status}</p>
//     </div>
//   );
// };

// export default EditPost;

import React, { useState, useEffect } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";

const EditPost = ({ title, content, status, error }) => {
  const { id } = useParams();
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const [newStatus, setNewStatus] = useState(status);
  const [newError, setNewError] = useState(error);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        setNewTitle(response.data.title);
        setNewContent(response.data.content);
      } catch (error) {
        setNewError("Lỗi khi lấy bài viết.");
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTitle || !newContent) {
      setNewError("Tiêu đề và nội dung không được để trống.");
      return;
    }

    const updatedPost = { title: newTitle, content: newContent };
    try {
      await axios.put(`http://localhost:3000/posts/${id}`, updatedPost);
      setNewStatus("Bài viết đã được cập nhật!");
      navigate("/");
    } catch (error) {
      setNewError("Có lỗi xảy ra khi cập nhật bài viết.");
    }
  };

  return (
    <div>
      <h1>Chỉnh sửa bài viết</h1>
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
          Cập nhật bài viết
        </Button>
      </Form>
    </div>
  );
};

// Sử dụng PropTypes để validate dữ liệu
EditPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  status: PropTypes.string,
  error: PropTypes.string,
};

export default EditPost;
