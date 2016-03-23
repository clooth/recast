// Dependencies
const Hapi = require('hapi');

// Create server
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000,
});

// Add routes
server.route({
  method: 'GET',
  path: '/ping',
  handler: (request, reply) => reply('pong'),
});

// Start server
server.start((err) => {
  if (err) throw err;

  console.log('recast running at:', server.info.uri);
});
