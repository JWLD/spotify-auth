const Express = require('express');

// require middleware
const router = require('./routes/index');

// create an express application
const app = Express();

// connect router to app
app.use(router);

module.exports = app;
