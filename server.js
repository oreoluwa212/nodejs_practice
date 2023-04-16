//creating a server

const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res)=>{
   // console.log(req.url, req.method);


   //set header content-type
   // res.setHeader('Content-Type', 'text/plain');


   res.setHeader('Content-Type', 'text/html');
   // res.write('<h1>Html tag</h1> \n <p>This is my html</p> \n <h5>This is my html</h5>');

   let path = './views';
   switch(req.url){
      case '/':
         path += '/index.html';
         res.statusCode = 200;
         break;
      case '/about':
         path += '/about.html';
         res.statusCode = 200;
         break;
      default:
         path += '/404.html';
         res.statusCode = 404;
         break;
   }
   fs.readFile(path, (err, data) => {
      if (err) {
         console.log(err);
         res.end();
      }else{
         res.write(data);
         res.end
      }
   });
});

server.listen(3000, 'localhost', ()=>{
   console.log('listening for request on port 3000')
});