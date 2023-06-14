// importing core modules like http 
const http = require('http')
const fs = require("fs");

// Now create server
const server = http.createServer((req,res) => {
    // console.log(req.url, req.method, req.headers)
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Node Server</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }

    if(url === "/message" && method === 'POST'){

       const body = [];
       // Stream and Buffer 
       req.on('data', (chunk) =>{
        body.push(chunk)
        console.log(chunk)
       })

       req.on('end', () =>{
       const parsedBody = Buffer.concat(body).toString()
       const message = parsedBody.split('=')[1]
       console.log(parsedBody)
       fs.writeFileSync('message.txt',message)
       })
       
       fs.writeFileSync('message.txt','DUMMY')
       res.statusCode = 302;
       res.setHeader('Location','/')
       return res.end()
    }

    // Server Response
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Node Server</title></head>')
    res.write('<body><h1>Welcome to Node.js World!</h1></body>')
    res.write('</html>')
    res.end()
})

// Now listen method will execute your app.js or server
server.listen(3001)