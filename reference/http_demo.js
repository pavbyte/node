const http = require('http');

http.createServer((req,res)=> {
    res.write('Hello wordl');
    res.end();

}).listen(3030, ()=> console.log('server running'));