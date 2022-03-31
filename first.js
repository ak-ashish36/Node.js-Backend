const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 5000;

// const webpage = fs.readFileSync('index.html');

const server = http.createServer((req, res)=>{
    url =req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if(url == '/home'){
        res.end("HomePage");
    } 
    if(url == '/about'){
        res.end("About page");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
