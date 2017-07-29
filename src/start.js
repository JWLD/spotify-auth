const app = require('./server');

// listen for connections on specific port
app.listen(3000, () => {
  console.log('Incredible things happening on port 3000!');
});
