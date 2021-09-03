var http = require('http');

var server = http.createServer(function(req, res){

var caminho = req.url;

if(caminho == "/principal"){
	res.end("<html><body><h1>Hello World</h1></body></html>");
}else if(caminho == "/contato"){
	res.end("<html><body><h1>Contato</h1></body></html>");
}else{
	res.end("<html><body><h1>404 page not found</h1></body></html>");
}


});

server.listen(3000);