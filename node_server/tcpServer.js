require('net')
    .createServer(socket => socket.end(require('strftime')('%Y-%m-%d %H:%M\n')))
    .listen(process.argv[2]);