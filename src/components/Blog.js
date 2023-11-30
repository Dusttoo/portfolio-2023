import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Post from "./Post";
import "../styles/Blog.css";

function Blog({ blogData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, categories]);

  const range = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  };

  const paginationNumbers = (currentPage, pageCount, delta = 2) => {
    const totalNumbers = delta * 2 + 3;
    const totalBlocks = totalNumbers;

    if (pageCount > totalBlocks) {
      const startPage = Math.max(2, currentPage - delta);
      const endPage = Math.min(pageCount - 1, currentPage + delta);
      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = pageCount - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      if (hasLeftSpill && !hasRightSpill) {
        const extraPages = range(startPage - spillOffset, startPage - 1);
        pages = [1, "...", ...extraPages, ...pages];
      } else if (!hasLeftSpill && hasRightSpill) {
        const extraPages = range(endPage + 1, endPage + spillOffset);
        pages = [...pages, ...extraPages, "...", pageCount];
      } else if (hasLeftSpill && hasRightSpill) {
        pages = [1, "...", ...pages, "...", pageCount];
      }

      return pages;
    }
    return range(1, pageCount);
  };

  useEffect(() => {
    const categoryList = {};

    blogData.forEach((post) => {
      if (Array.isArray(post.fields.category)) {
        post.fields.category.forEach((category) => {
          categoryList[category] = categoryList[category] || false;
        });
      }
    });

    setCategories(categoryList);
  }, [blogData]);

  const toggleCategory = (category) => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category],
    }));
  };

  const getFilteredPosts = () => {
    const activeCategories = Object.entries(categories)
      .filter(([_, isActive]) => isActive)
      .map(([category]) => category);

    if (activeCategories.length === 0) {
      return blogData.filter((post) =>
        post.fields.title.toLowerCase().includes(searchQuery)
      );
    }

    return blogData.filter(
      (post) =>
        post.fields.title.toLowerCase().includes(searchQuery) &&
        post.fields.category &&
        Array.isArray(post.fields.category) &&
        post.fields.category.some((category) =>
          activeCategories.includes(category)
        )
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(calculateItemsPerPage());
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateItemsPerPage = () => {
    const postWidth = 266;
    const containerWidth = document.querySelector(".blog-main").offsetWidth;
    const itemsPerPage = Math.floor(containerWidth / postWidth);
    return itemsPerPage > 0 ? itemsPerPage : 1;
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredPosts = getFilteredPosts();

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = getFilteredPosts().slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const pageCount =
    itemsPerPage > 0 ? Math.ceil(filteredPosts.length / itemsPerPage) : 0;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginationItems = paginationNumbers(currentPage, pageCount, 2);

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
          <button onClick={() => setShowModal(!showModal)}>
            Filter Categories
          </button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <div className="options">
                {Object.keys(categories).map((category) => (
                  <div className="option">
                    <label key={category} />
                    <input
                      type="checkbox"
                      checked={categories[category]}
                      onChange={() => toggleCategory(category)}
                    />
                    {category}
                  </div>
                ))}
              </div>
            </Modal>
          )}
        </div>
      </header>
      <main className="blog-main">
        {currentPosts.map((post) => (
          <Post key={post.sys.id} post={post} />
        ))}
      </main>
      <div className="pagination">
        {paginationItems.map((item, index) =>
          item === "..." ? (
            <span key={index} className="page-item dots">
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => paginate(item)}
              className={`page-item ${currentPage === item ? "active" : ""}`}
            >
              {item}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default Blog;
