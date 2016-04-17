'use strict';

let http = require('http'),
    url = require('url');

let parsetime = time => ({
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    });
    
let unixtime = time => ({ unixtime : time.getTime() })

var server = http.createServer((req, res) => {

    var parsedUrl = url.parse(req.url, true);
    var time = new Date(parsedUrl.query.iso);
    var result;
    
    if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time);
    else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time);
    
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(Number(process.argv[2]));