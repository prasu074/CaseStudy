 var http=require("http")
 
 var account={
	 Accname:"ABC",
	 Accno:"123456789"
 };
 
 http.createServer(function(request,responce){
	 responce.writeHead(200,{"Content-Type":"text/plain"});
	 responce.end(JSON.stringify(account));
	 
	 
 }).listen(7890);
 console.log("SERVER IS RUNNING ON PORT 7890");