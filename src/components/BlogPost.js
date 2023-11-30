// BlogPost.js
import React, { useEffect, useState } from "react";
import { contentfulClient } from "../services/Contentful";
import { useParams } from "react-router-dom";
import "../styles/BlogPost.css"; // Ensure the path to your CSS file is correct
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const BlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  console.log(post)

  useEffect(() => {
    contentfulClient
      .getEntry(postId)
      .then((entry) => {
        setPost(entry.fields);
      })
      .catch(console.error);
  }, [postId]);

  if (!post) {
    return <div className="blog-post-container">Loading...</div>;
  }

    const renderContent = (content) => {
      // If the content from Contentful is rich text, it needs to be rendered as such
      return documentToReactComponents(content);
    };

  return (
    <div className="blog-post-container">
      <h1 className="blog-post-title">{post.title}</h1>
      {post.featuredImage && post.featuredImage.fields.file.url && (
        <img
          className="blog-post-image"
          src={post.featuredImage.fields.file.url}
          alt={post.title}
        />
      )}
      <div className="blog-post-content">{renderContent(post.content)}</div>
      {/* Add any additional post details you want to include */}
    </div>
  );
};

export default BlogPost;
