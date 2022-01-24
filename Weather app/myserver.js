let http= require("http");
http.createServer( function(req,res){
    res.writeHead(200,{
        'Content-type':'text/html'
    });
    res.end("Hello from my node server");
}).listen(8080)