import React from "react";
import "../styles/ComponentRichImage.css";

const ComponentRichImage = ({ url, alt }) => {
  return (
    <div className="rich-image-container">
      <img src={url} alt={alt} className="rich-image" />
    </div>
  );
};

export default ComponentRichImage;
