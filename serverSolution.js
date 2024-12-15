const http = require('http');

const server = http.createServer(async (req, res) => {
  try {
    // Simulate a long-running asynchronous operation
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a 1-second delay
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});