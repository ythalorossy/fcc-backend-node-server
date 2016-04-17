'use strict';

let fs = require("fs")
    , http = require('http');

let port = Number(process.argv[2])
    , file = process.argv[3];

let server = http.createServer((request, response) => {
    
    response.writeHead(200, { 'content-type': 'text/plain' });
    
    fs.createReadStream(file).pipe(response);
});

server.listen(port);
