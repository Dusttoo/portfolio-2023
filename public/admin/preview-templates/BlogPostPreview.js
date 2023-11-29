import React from "react";

const BlogPostPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.date}</p>
        <img src={data.thumbnail} alt={data.title} />
        <div dangerouslySetInnerHTML={{ __html: data.body }} />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default BlogPostPreview;
