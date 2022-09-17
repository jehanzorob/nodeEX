let http=require('http')


http.createServer(function(req, res){
res.writeHead(200,{'Content-Type':'text/html'});
//res.write("****welcome back alien !!!");
res.write("today is a good day ");
res.end("****welcome back alien !!!****");
}
).listen(9003);

