import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const getPosts = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts1"
      );

      setPosts(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (error) {
    return <div>Something went wrong: {error.message}</div>;
  }

  return <div>Posts</div>;
};

export default Posts;
