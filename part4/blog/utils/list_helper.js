const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item.likes;
  };

  return blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
  // find the blog with the most likes
  return blogs.reduce((current, previous) =>
    current.likes > previous.likes ? current : previous
  );
};

const mostBlogs = (blogs) => {
  // find the author with the most blogs
  blogs.reduce((current, previous) => {
    if (current.author === previous.author) {
      current.blogs += 1;
    }
    return current;
  });
  // return the author with the most blogs
  return blogs.reduce((current, previous) =>
    current.blogs > previous.blogs ? current : previous
  );
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
};
