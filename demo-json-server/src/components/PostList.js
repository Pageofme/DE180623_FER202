// import React, { useState, useEffect } from "react";

// const PostList = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:3000/posts") // API GET Posts
//       .then((response) => response.json()) // Chuyển dữ liệu về dạng JSON
//       .then((data) => {
//         setData(data); // Lưu dữ liệu vào state
//         setLoading(false); // Đánh dấu việc tải xong
//       })
//       .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
//   }, []); // Chạy 1 lần khi component được mount

//   if (loading) {
//     return <div>Đang tải...</div>; // Hiển thị thông báo đang tải
//   }

//   return (
//     <div>
//       <h1>Danh sách bài viết</h1>
//       <ul>
//         {data.map((post) => (
//           <li key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostList;

// import React, { useState, useEffect } from "react";

// const PostList = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/posts");
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json(); // Convert response to JSON
//         setData(data); // Store the data in state
//         setLoading(false); // Set loading to false
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData(); // Fetch data on mount
//   }, []); // Run once when the component is mounted

//   if (loading) {
//     return <div>Loading...</div>; // Show a loading message
//   }

//   return (
//     <div>
//       <h1>Danh sách bài viết</h1>
//       <ul>
//         {data.map((post) => (
//           <li key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostList;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const PostList = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Sử dụng useEffect để thực hiện tác vụ fetching khi component mount
//   useEffect(() => {
//     // Định nghĩa hàm async để thực hiện fetching dữ liệu
//     const fetchData = async () => {
//       try {
//         // Gửi yêu cầu GET với axios và chờ kết quả
//         const response = await axios.get("http://localhost:3000/posts");
//         setData(response.data); // Lưu dữ liệu vào state từ phản hồi
//         setLoading(false); // Đánh dấu việc tải xong
//       } catch (error) {
//         console.error("Lỗi khi lấy dữ liệu:", error);
//       }
//     };

//     fetchData(); // Gọi hàm fetchData khi component mount
//   }, []); // Chạy 1 lần khi component được mount

//   if (loading) {
//     return <div>Đang tải...</div>; // Hiển thị thông báo đang tải
//   }

//   return (
//     <div>
//       <h1>Danh sách bài viết</h1>
//       <ul>
//         {data.map((post) => (
//           <li key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostList;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom"; // Import Link từ react-router-dom

// const PostList = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Use useEffect to fetch data when the component mounts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/posts");
//         setData(response.data); // Save response data to state
//         setLoading(false); // Mark loading as complete
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false); // Make sure to stop loading on error
//       }
//     };

//     fetchData();
//   }, []); // Empty array ensures this runs only once when the component mounts

//   if (loading) {
//     return <div>Đang tải...</div>; // Show loading message while data is being fetched
//   }

//   if (!data || data.length === 0) {
//     return <div>Không có bài viết nào!</div>; // Show a message if no posts are available
//   }

//   return (
//     <div>
//       <h1>Danh sách bài viết</h1>
//       <button>
//         <Link to="/create">Tạo bài viết mới</Link>{" "}
//         {/* Button Create dẫn đến trang CreatePost */}
//       </button>
//       <ul>
//         {data.map((post) => (
//           <li key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostList;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom"; // Thêm useNavigate để chuyển hướng sau khi xóa

// const PostList = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate(); // Khởi tạo useNavigate để chuyển hướng sau khi xóa bài viết

//   // Fetch dữ liệu khi component mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/posts");
//         setData(response.data); // Lưu dữ liệu vào state
//         setLoading(false); // Đánh dấu việc tải xong
//       } catch (error) {
//         console.error("Lỗi khi lấy dữ liệu:", error);
//         setLoading(false); // Dừng trạng thái tải nếu có lỗi
//       }
//     };

//     fetchData();
//   }, []); // Chạy 1 lần khi component được mount

//   if (loading) {
//     return <div>Đang tải...</div>; // Hiển thị thông báo đang tải
//   }

//   if (!data || data.length === 0) {
//     return <div>Không có bài viết nào!</div>; // Hiển thị thông báo nếu không có bài viết
//   }

//   // Hàm để xóa bài viết
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3000/posts/${id}`);
//       setData(data.filter((post) => post.id !== id)); // Cập nhật danh sách bài viết sau khi xóa
//     } catch (error) {
//       console.error("Lỗi khi xóa bài viết:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Danh sách bài viết</h1>
//       <button>
//         <Link to="/create">Tạo bài viết mới</Link>{" "}
//         {/* Button Create dẫn đến trang CreatePost */}
//       </button>
//       <ul>
//         {data.map((post) => (
//           <li key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//             <div>
//               {/* Link đến trang chỉnh sửa bài viết */}
//               <Link to={`/edit/${post.id}`}>Chỉnh sửa</Link>
//               <button onClick={() => handleDelete(post.id)}>Xóa</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, ListGroup, Spinner, Alert, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostList = ({ posts, loading, error }) => {
  const [showModal, setShowModal] = useState(false); // Để kiểm soát Modal
  const [postToDelete, setPostToDelete] = useState(null); // Lưu bài viết cần xóa

  // Hàm mở modal xác nhận xóa
  const handleDeleteClick = (post) => {
    setPostToDelete(post);
    setShowModal(true); // Hiển thị modal xác nhận
  };

  // Hàm xóa bài viết
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/posts/${postToDelete.id}`);
      setShowModal(false); // Đóng modal
      posts.splice(posts.indexOf(postToDelete), 1); // Cập nhật lại dữ liệu sau khi xóa
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error);
    }
  };

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <Button variant="primary" as={Link} to="/create">
        Tạo bài viết mới
      </Button>
      <ListGroup className="mt-3">
        {posts.map((post) => (
          <ListGroup.Item key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.content}</p>
            <Button
              variant="warning"
              as={Link}
              to={`/edit/${post.id}`}
              className="mr-2"
            >
              Chỉnh sửa
            </Button>
            <Button
              variant="danger"
              onClick={() => handleDeleteClick(post)} // Gọi hàm hiển thị modal
            >
              Xóa
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Modal xác nhận xóa */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xóa bài viết</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Bạn có chắc chắn muốn xóa bài viết này không?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Hủy
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

// Sử dụng PropTypes để validate dữ liệu
PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default PostList;
