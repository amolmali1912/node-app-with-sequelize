const fs = require('fs');

const requestHandler = (req, res) => { 
  const url = req.url;
  const method = req.method;

// when url is just '/'(i.e.very first page)
if(url === '/') {
  // sending response
  res.write('<html>');  // we use res.write to write something on html page..
  res.write('<head><title>Its still working!! Awesome..</title></head>');
  res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
  res.write('</html>');
  // console.log("Now we are moving out of function..");
  
  return res.end();  /* function execution immediately end here; 'return' statement here. Remember, initially url will be '/'; so no any code will be executed after this statement when page load initially.  */
}
// process.exit()  // quit event loop / quit listening to the server

// sending response
if(url === '/message' && method === 'POST') {
  const requestBody = [];

  // access data from request body
  req.on('data', (chunk) => {  // on method allow us to listen to certain events of request object; and data event will be fired whenever a new chunk is ready to be read 
    // console.log("chunk is", chunk);
    // console.log("chunk with toString method: ", chunk.toString());  
    // it returns name of input + value entered in input
    requestBody.push(chunk);
  })  

  return req.on('end', () => {
    // console.log("Buffer is ", Buffer);
    const parsedBody = Buffer.concat(requestBody).toString();  /* 
    1) It will create a new Buffer that gets merged with all the chunks available in requestBody.

    2) Node provides Buffer class which provides instances to store raw data similar to an array of integers, Buffer class is a global class that can be accessed in an application without importing the buffer module */ 
    const message = parsedBody.split("=")[1];
    // fs.writeFileSync('message.txt', message);
    fs.writeFile('message.txt', message, (err) => {
      res.statusCode = 302;  // 302 indicates we are planning to redirect somewhere 
      res.setHeader('Location', '/' );  // redirecting to '/' location
      return res.end();  // do not forget to end your response in last
    });  /* 
    1)There are two modes avaiable while creating files; writeFile and writeFileSync; Sync stands for Synchronous; the difference between writeFile and writeFileSync is;  writeFileSync method blocks code execution of next line until the file is created whereas writeFile does not block code execution */

  })  // end listener will be fired when node done with parsing request
}
/* since first if condition(i.e. when url is just '/') has return statement, and first if is initially true, below statements will not be executed at very first time.  */
res.setHeader('Content-Type', 'text/html');
res.write('<html>');  // we use res.write to write something on html page..
res.write('<head><title>First Response..</title></head>');
res.write('<body><h1>Hello from Node.js!! Awesome..</h1></body>')
res.write('</html>');
res.end();  
 }

 // module.exports is used to export something from one file to another. module is a global object managed by node that has exports property which we use to export functionality from one file to another file. */ 
//  module.exports = requestHandler;


// module.exports as a object; passing multiple stuff in the form of object properties
//  module.exports = {
//    handler: requestHandler,
//    someText: 'Come on Man...You can..U Can..'
//  };


// this exports syntax is equivalent to above exports syntax:
//  module.exports.handler = requestHandler;
//  module.exports.someText = "Come on Man...You are doing very good..";

// same as above, just omitting module keyword.
exports.handler = requestHandler;
exports.someText = "Come on Man...You are doing very good..";