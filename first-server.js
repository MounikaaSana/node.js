var http=require('http');
var imp=require('./first-module');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(imp.myDate());
    // res.end('Hi Guys , I am mounikasana');
    res.end();
}).listen(3001);