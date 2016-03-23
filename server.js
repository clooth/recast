// Dependencies
const Hapi = require('hapi');
const Good = require('good');

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

// Configure logging
server.register({
  register: Good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      events: {
        response: '*',
        log: '*',
      },
    }],
  },
});

// Start server
server.start((err) => {
  if (err) throw err;

  server.log('info', `recast running at ${server.info.uri}`);
});
