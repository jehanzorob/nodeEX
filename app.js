let http=require('http')
//https://www.youtube.com/watch?v=Q1kHG842HoI
//https://www.youtube.com/watch?v=yXT1ElMEkW8
// sept 19
//&&&&&&&&& to new braanch
http.createServer(function(req, res){
res.writeHead(200,{'Content-Type':'text/html'});
//res.write("****welcome back alien !!!");
res.write("today is a good day ");
res.end("****welcome back alien !!!****");
}
).listen(9003);

