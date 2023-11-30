export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const truncateTitle = (title, maxLength = 50) => {
  if (title.length > maxLength) {
    return title.substr(0, maxLength - 3) + "...";
  }
  return title;
};

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
