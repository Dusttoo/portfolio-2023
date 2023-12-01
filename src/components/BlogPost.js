import React, { useEffect, useState } from "react";
import { contentfulClient } from "../services/Contentful";
import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { scrollToTop } from "../utils";
import Post from "../components/Post";
import "../styles/BlogPost.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        if (node.data.target.sys.contentType.sys.id === "codeBlock") {
          return (
            <SyntaxHighlighter language="javascript" style={coldarkDark}>
              {node.data.target.fields.code}
            </SyntaxHighlighter>
          );
        }
      },
    },
  };

  useEffect(() => {
    scrollToTop();
  }, [post]);

  useEffect(() => {
    contentfulClient
      .getEntry(postId)
      .then((entry) => {
        setPost(entry.fields);
        setRelatedPosts(entry.fields.relatedBlogPosts.splice(0, 2));
      })
      .catch(console.error);
  }, [postId]);

  if (!post) {
    return <div className="blog-post-container">Loading...</div>;
  }

  const renderContent = (content) => {
    return documentToReactComponents(content, options);
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
          <Post key={post.sys.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
