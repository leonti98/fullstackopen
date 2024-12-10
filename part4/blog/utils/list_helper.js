const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  reducer = (sum, item) => {
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
  const authors = blogs.map((blog) => blog.author);
  const authorCount = authors.reduce((allAuthors, author) => {
    if (author in allAuthors) {
      allAuthors[author]++;
    } else {
      allAuthors[author] = 1;
    }
    return allAuthors;
  }, {});

  const mostBlogs = Object.keys(authorCount).reduce((a, b) =>
    authorCount[a] > authorCount[b] ? a : b
  );
  return { author: mostBlogs, blogs: authorCount[mostBlogs] };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
};
