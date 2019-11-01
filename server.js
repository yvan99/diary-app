/* server creation*/

const http = require('http');

const app = require('./app');

// assigning a port where the project should run

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log('server listening on port', port)
}); // restarting the server