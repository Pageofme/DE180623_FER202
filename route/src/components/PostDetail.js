// import React from "react";
// import { useParams } from "react-router-dom";

// function PostDetail() {
//   const { id } = useParams(); // Lấy tham số ID từ URL

//   return (
//     <div>
//       <h2>Post Detail for Post ID: {id}</h2>
//       <p>This is the detailed information for post {id}.</p>
//     </div>
//   );
// }

// export default PostDetail;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// function PostDetail() {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     fetch("/posts.json")
//       .then((response) => response.json())
//       .then((data) => {
//         const foundPost = data.find((p) => p.id === id);
//         setPost(foundPost);
//       })
//       .catch((error) => console.error("Error loading post:", error));
//   }, [id]);

//   if (!post) return <h2>Post not found</h2>;

//   return (
//     <div>
//       <h2>{post.title}</h2>
//       <p>{post.content}</p>
//     </div>
//   );
// }

// export default PostDetail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Error:", err));
  }, [id]);

  if (!post) return <h2>Đang tải dữ liệu...</h2>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
