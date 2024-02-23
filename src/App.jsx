import { useEffect, useState } from "react";
import "./App.css";
import api from "./api/api.js";
import AddPost from "./components/AddPost.jsx";
import EditPost from "./components/EditPost.jsx";
import Posts from "./components/Posts";
import axios from "axios";
// import initialPosts from "./data/db.js";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null); // post I am editing
  const [error, setError] = useState(null);

  const handleAddPost = () => {
    
  };

  const handleDeletePost = () => {
    // if (confirm("Are you sure you want to delete the post?")) {
    //   try {
    //     await api.delete(`/posts/${postId}`);
    //     const newPosts = posts.filter((post) => post.id !== postId);
    //     setPosts(newPosts);
    //   } catch (err) {
    //     setError(err.message);
    //   }
    // } else {
    //   console.log("You chose not to delete the post!");
    // }
  };

  const handleEditPost = () => {
    // try {
    //   const response = await api.patch(
    //     `/posts/${updatedPost.id}`,
    //     updatedPost
    //   );

    //   const updatedPosts = posts.map((post) =>
    //     post.id === response.data.id ? response.data : post
    //   );

    //   setPosts(updatedPosts);
    // } catch (err) {
    //   setError(err.message);
    // }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/posts");

        if (response && response.data) {
          setPosts(response.data);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div>
        <h1>API Request with Axios</h1>
        <hr />

        <div>
          <Posts
            posts={posts}
            onDeletePost={handleDeletePost}
            onEditClick={setPost}
          />

          <hr />

          {!post ? (
            <AddPost onAddPost={handleAddPost} />
          ) : (
            <EditPost post={post} onEditPost={handleEditPost} />
          )}

          {error && (
            <>
              <hr />
              <div className="error">{error}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}