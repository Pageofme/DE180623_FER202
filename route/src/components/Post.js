// import React from "react";
// import { Link } from "react-router-dom";

// function Post() {
//   return (
//     <div>
//       <h2>Post List</h2>
//       <ul>
//         <li>
//           <Link to="/post/1">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/2">Post 2</Link>
//         </li>
//         <li>
//           <Link to="/post/3">Post 3</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Post;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Post() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("/posts.json")
//       .then((response) => {
//         if (!response.ok) throw new Error("Network error");
//         return response.json();
//       })
//       .then((data) => setPosts(data))
//       .catch((error) => console.error("Error loading posts:", error));
//   }, []);

//   return (
//     <div>
//       <h2>Post List</h2>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <Link to={`/post/${post.id}`}>{post.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Post;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h2>Danh sách bài viết (API)</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
