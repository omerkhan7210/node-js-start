const http = require('http');
const file = require('fs');
const _ = require('lodash');


const server = http.createServer((request,response)=>{
    //OR GETTING THE REQUEST FROM NEWLY CREATED SERVER
    //console.log(request.url,request.method);
    response.setHeader("Content-Type","text/html");
    file.readFile("../views/node.html",(error,data)=>{
        if(error){
            console.log(error);
            response.end();
        }else{
            response.write(data);
            response.end();
        }
    });
    
});

server.listen(3000,"localhost",()=>{
    console.log("listening for ports at 3000");
});