const dummy = (blogs) => {
  reducer = (sum, item) => {
    return sum + item;
  };

  return 1;
  // return blogs.reduce(reducer, 0);
};

module.exports = {
  dummy,
};
