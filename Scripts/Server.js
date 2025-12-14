// Importing the built-in HTTP module
const http = require('http')

// Creating an HTTP server
// The callback function runs every time a request is received
const server = http.createServer((req, res) => {
    console.log("Request Made"); // Logs whenever a client sends a request

    // 'req' contains request details (URL, method, headers)
    // 'res' is used to send response back to the client
})

// Starting the server and listening on port 3000
server.listen(3000, 'localhost', () => {
    console.log('Server is Listening'); // Confirms server is running
})