var http = require('http');
var mod = require('./second-module');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(mod.msg());
    console.log(mod.msg());
    res.end();
}).listen(3004);