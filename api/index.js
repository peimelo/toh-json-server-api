const jsonServer = require('json-server');
const app = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

app.use(middlewares);

app.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
    '/heroes\\?name=:term': '/heroes?q=:term',
  })
);

app.use(router);

app.listen(port, () => {
  console.log('JSON Server is running on port', port);
});

module.exports = app;
