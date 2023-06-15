# Node-basic
<h2>How Web Works!</h2>

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
<code>const server = http.createServer()</code>
  Now create server contain different parameters like callback functions to get requests and give response on some coding.

Now there are different methods use in different purpose like

  <ul>
<li>
  res.write('<html>') <span>It will use to write response It works in chunks</span>
</li>
  <li>
    res.setHeader('Content-Type', 'text/html') <span>Format of header respone</span> 
  </li>
  <li> 
   res.end() <span>This is statements are end of response we can't add write method after this method or statement</span> 
  </li>
  <li>
     fs.writeFileSync('message.txt',message) <span>It will use to write small line of response but not for long files
We can write fs.writeFile()</span> 
  </li>

</ul>
  

  <h3>Now server listen Method will help to run server on localhost</h3>
// Now listen method will execute your app.js or server
server.listen(3001)


  </p>


<h1>Stream and Buffer in Node.js</h1>
<p>
A string is a sequence of characters, but a buffer is a sequence of bytes. Even though a buffer might contain the encoded content of a string value, it may also encode other kinds of values or any binary data.
</p>

<h1>Exporting File</h1>
<p>When exporting any file write this command at the end of file
<code>
  module.export = functionName
</code>
There are different method to write for exporting 
  <code>
module.exports = { replaceStr }
// or
exports.replaceStr = replaceStr

exports.value1 = value1
exports.function1 = function1
</code>
</p>
