const listHelper = require('../utils/list_helper');
const { blogs } = require('./dummy');
const { test, describe } = require('node:test');
const assert = require('node:assert');

describe('Find Most author with most blogs', () => {
  test('should return author with most blogs', () => {
    const result = listHelper.mostBlogs(blogs);

    assert.deepStrictEqual(result, {
      author: 'Robert C. Martin',
      blogs: 3,
    });
  });
});
