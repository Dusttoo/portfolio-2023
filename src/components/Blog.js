import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Blog.css";

function Blog({ blogData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(calculateItemsPerPage());
    };

    // Set initial items per page
    handleResize();

    // Update items per page on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    const calculateItemsPerPage = () => {
      // Example calculation, assuming each post is 200px wide + 16px gap
      const postWidth = 216; // 200px width + 16px gap
      const containerWidth = document.querySelector(".blog-main").clientWidth;
      return Math.floor(containerWidth / postWidth);
    };

    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);
    const pageCount = Math.ceil(blogData.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

   const generatePostUrl = (postId) => {
     // This assumes you're using a URL structure like '/blog/:postId'
     return `/blog/${postId}`;
   };

  const handleSearchChange = (e) => {
    // Implement your search logic here
  };
  const handleCategoryClick = (category) => {
    // Implement your category filtering logic here
  };
  const truncateTitle = (title, maxLength = 50) => {
    console.log(title);

    if (title.length > maxLength) {
      return title.substr(0, maxLength - 3) + "..."; // '...' represents the truncation
    }
    return title;
  };
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div id="blog" className="blog-page">
      <header className="blog-header">
        <div className="blog-top-bar">
          <h1 className="blog-title">Blog</h1>
          <input
            type="text"
            placeholder="Search blog posts..."
            className="blog-search-bar"
            onChange={handleSearchChange}
          />
          <div className="blog-categories">
            <button onClick={() => handleCategoryClick("Category 1")}>
              Category 1
            </button>
            <button onClick={() => handleCategoryClick("Category 2")}>
              Category 2
            </button>
            <button onClick={() => handleCategoryClick("Category 3")}>
              Category 3
            </button>
            {/* Add more buttons as needed */}
          </div>
        </div>
      </header>
      <main className="blog-main">
        {currentPosts.map((post) => (
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
            <Link to={generatePostUrl(post.sys.id)}>Read More</Link>
          </article>
        ))}
      </main>
      <div className="pagination">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            key={number}
            onClick={() => paginate(number + 1)}
            className={`page-item ${
              currentPage === number + 1 ? "active" : ""
            }`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Blog;
