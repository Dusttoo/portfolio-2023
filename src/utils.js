export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // for smooth scrolling
  });
};

export const truncateTitle = (title, maxLength = 50) => {
  console.log(title);

  if (title.length > maxLength) {
    return title.substr(0, maxLength - 3) + "..."; // '...' represents the truncation
  }
  return title;
};

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
