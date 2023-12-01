import React from "react";
import { Link } from "react-router-dom";
import { truncateTitle, formatDate } from "../utils";
function Post({ post }) {
  console.log(post.fields)
  return (
    <article key={post.sys.id} className="blog-post">
      {post.fields.featuredImage.fields.file.url && (
        <img
          src={post.fields.featuredImage.fields.file.url}
          alt={post.fields.featuredImage.fields.file.title}
          className="post-thumbnail"
        />
      )}
      <h3 className="post-title">{truncateTitle(post.fields.title)}</h3>
      <p className="post-date">{formatDate(post.fields.publishedDate)}</p>
      <p className="post-description">{post.fields.shortDescription}</p>
      <Link to={`/blog/${post.fields.slug}`}>Read More</Link>
      <div className="post-categories">
        {post.fields.category && post.fields.category.length > 0 ? (
          post.fields.category.map((category, index) => (
            <span key={index} className="post-category-tag">
              {category}
            </span>
          ))
        ) : (
          <span className="post-category-tag">Uncategorized</span>
        )}
      </div>
    </article>
  );
}

export default Post;
