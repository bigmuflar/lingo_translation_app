var Lingos = require('./controllers/lingos');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.sendFile('index.html', {root : './public/html'})
  });

  app.post('/api/lingos', Lingos.create);
  app.get('/api/lingos', Lingos.get);
  app.get('/api/lingos/:id', Lingos.get);
}
