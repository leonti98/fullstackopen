const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const blogRouter = require('./controllers/blog');
const middleware = require('./utils/middleware');
const { error, info } = require('./utils/logger');
const mongoose = require('mongoose');

const mongoUrl = config.MONGODB_URI;
info('connecting to database');
mongoose.connect(mongoUrl).catch((error) => {
  error('error connecting to MongoDB:', error.message);
});

app.use('/api/blogs', blogRouter);

app.use(cors());
app.use(express.json());

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
