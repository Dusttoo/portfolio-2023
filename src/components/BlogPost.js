// BlogPost.js
import React, { useEffect, useState } from "react";
import { contentfulClient } from "../services/Contentful";
import { useParams, Link } from "react-router-dom";
import "../styles/BlogPost.css"; // Ensure the path to your CSS file is correct
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { scrollToTop, truncateTitle, formatDate } from "../utils";

const BlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    scrollToTop();
  }, [post]);

  useEffect(() => {
    contentfulClient
      .getEntry(postId)
      .then((entry) => {
        setPost(entry.fields);
        setRelatedPosts(entry.fields.relatedBlogPosts.splice(0,2));
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
      <h2>Related Posts</h2>
      <div className="related-posts-container">
        {relatedPosts.map((post) => (
          <article key={post.sys.id} className="related-post-card">
            {post.fields.featuredImage.fields.file.url && (
              <img
                src={post.fields.featuredImage.fields.file.url}
                alt={post.fields.featuredImage.fields.file.title}
                className="related-post-thumbnail"
              />
            )}
            <h3 className="related-post-title">
              {truncateTitle(post.fields.title)}
            </h3>
            <p className="related-post-date">
              {formatDate(post.fields.publishedDate)}
            </p>
            <p className="related-post-description">
              {post.fields.shortDescription}
            </p>
            <Link
              to={`/blog/${post.sys.id}`}
              className="related-post-read-more"
            >
              Read More
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
