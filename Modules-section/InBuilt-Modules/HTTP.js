const http = require('http')
const port = 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.end('Hello, you are welcome to our home page')  
    }
    if (req.url === '/about') {
        res.end('This is my short history');
    }
    res.end(
        `<h1>Oops!</h1>
        <p>We cannot seem to find the page that you are looking for</p>
        <a href="/">back home</a>`
    )
});

server.listen(port);
