const { test, describe } = require('node:test');
const assert = require('node:assert');
const listHelper = require('../utils/list_helper');
const { blogs, listWithOneBlog, listWithThreeBlogs } = require('./dummy');

describe('total likes', () => {
  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    assert.strictEqual(result, 5);
  });

  test('Three blog likes', () => {
    const result = listHelper.totalLikes(listWithThreeBlogs);
    assert.strictEqual(result, 30);
  });

  test('should return total likes', () => {
    const result = listHelper.totalLikes(blogs);
    assert.strictEqual(result, 36);
  });
});
