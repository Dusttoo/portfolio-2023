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
import { Helmet } from "react-helmet";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  console.log(slug);

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
      .getEntries({
        "fields.slug": slug,
        content_type: "pageBlogPost",
      })
      .then((response) => {
        if (response.items.length > 0) {
          setPost(response.items[0].fields);
          setRelatedPosts(
            response.items[0].fields.relatedBlogPosts.splice(0, 2)
          );
        }
      })
      .catch(console.error);
  }, [slug]);

  if (!post) {
    return <div className="blog-post-container">Loading...</div>;
  }

  const renderContent = (content) => {
    return documentToReactComponents(content, options);
  };

  return (
    <>
      <Helmet>
        <title>{post.shortTitle} - Dusty Mumphrey</title>
        <meta name="description" content={post.shortDescription} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.shortDescription} />
        <meta
          property="og:image"
          content={post.featuredImage.fields.file.url}
        />
        <meta
          property="og:url"
          content={`https://dustymumphrey.com/#/blog/${post.fields.slug}`}
        />
      </Helmet>
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
    </>
  );
};

export default BlogPost;
