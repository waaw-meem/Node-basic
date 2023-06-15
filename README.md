# Node-basic

![image](https://github.com/waaw-meem/Node-basic/assets/39905929/436819b5-42d9-4b3d-818d-afe3d09011f0)

<h1>Importing Node Modules</h1>

<p>When Importing core modules of node.js you need to import some important protocols like http, http, etc
  <b>Code Example</b>
  <code>const http = require('http')
  const fs = require("fs");
  </code>
  In this above way we can include or import different core modules like fs, path, and os.
</p>

<h1>Create Server in Node.js</h1>

<p>
  Your can create server by using createServer() method It contain callback functionconst server = http.createServer((req,res) => {
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
</p>

