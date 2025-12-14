// Importing the built-in HTTP module
const http = require('http')

// Creating an HTTP server
// The callback function runs every time a request is received
const server = http.createServer((req, res) => {
    // Request
    console.log("Request Made"); // Logs whenever a client sends a request
    console.log(req.url); // req.url return the current url
    console.log(req.method); // returns the type of request #GET #PUT or #PATCH #DELETE #POST 

    // Response
    // response type HTML
    res.setHeader('content-Type', 'text/html')
    res.write('<h1>Response - Hello World.</h1>')
    res.write('<h1>Response - Hello Server.</h1>')
    res.end()

    // response type TEXT
    res.setHeader('content-Type', 'text/plain')
    res.write('Response - Hello World.')
    res.write('Response - Hello Server.')
    res.end()

    // 'req' contains request details (URL, method, headers)
    // 'res' is used to send response back to the client
})

// Starting the server and listening on port 3000
server.listen(3000, 'localhost', () => {
    console.log('Server is Listening'); // Confirms server is running
}) 