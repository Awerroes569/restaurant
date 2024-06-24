const jsonServer = require('json-server');
const path = require('path');

// Create the server
const server = jsonServer.create();

// Specify the path to the database
const router = jsonServer.router(path.join(__dirname, 'build/db/app.json'));

// Use default middlewares (static and noCors options)
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, 'build'),
  noCors: true
});

// Set the port
const port = process.env.PORT || 3131;

// Use the middlewares
server.use(middlewares);

// Rewriter to handle /api/* routes
server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));

// Use the router
server.use(router);

// Start the server
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
