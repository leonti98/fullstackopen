const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  reducer = (sum, item) => {
    return sum + item.likes;
  };

  return blogs.reduce(reducer, 0);
};

module.exports = {
  dummy,
  totalLikes,
};
