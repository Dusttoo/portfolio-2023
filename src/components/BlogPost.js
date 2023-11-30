import React, { useEffect, useState } from "react";
import { contentfulClient } from "../services/Contentful";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    contentfulClient
      .getEntry(postId)
      .then((entry) => {
        setPost(entry.fields);
      })
      .catch(console.error);
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      {/* ... display other parts of the blog post */}
    </article>
  );
};

export default BlogPost;
