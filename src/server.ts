import http from 'http';

const server = http.createServer();

// Listen to the request event
server.on('request', (_req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
        JSON.stringify({
            data: 'Hello World!',
        })
    );
});

export default server;
