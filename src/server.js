const Express = require('express');
const ExpHbs = require('express-handlebars');

// require middleware
const router = require('./routes/index');

// create an express application
const app = Express();

// register handlebars template engine with app
app.engine('hbs', ExpHbs({
  defaultLayout: 'main',
  extname: 'hbs'
}));

// set the view engine
app.set('view engine', 'hbs');

// serve static files from public folder
app.use(Express.static('public'));

// connect router to app
app.use(router);

module.exports = app;
