// Importing the built-in HTTP module
const http = require('http')

// Importing the built-in 'fs' (File System) module in Node.js
const fs = require('fs')

// Creating an HTTP server
// The callback function runs every time a request is received
const server = http.createServer((req, res) => {
    // Response
    // response type HTML
    res.setHeader('Content-Type', 'text/html')

    // create PATH var to store current path
    let path = '../FrontEnd/'

    // Manual Routing
    if (req.url === '/') {
        path += 'index.html'
        res.statusCode = 200
    }
    else if (req.url === '/home') {
        res.statusCode = 301
        res.setHeader('Location', '/')
        res.end()
    }
    else if (req.url === '/about') {
        path += 'about.html'
        res.statusCode = 200
    }
    else if (req.url === '/services') {
        path += 'services.html'
        res.statusCode = 200
    }
    else {
        path += 'notFound.html'
        res.statusCode = 404
    }

    // Read the file only if it exists
    if (fs.existsSync('../FrontEnd/index.html')) {  // Check file existence
        fs.readFile(path, (err, data) => {  // Read file
            if (err) {
                console.log(err.message);
                res.end()
            }
            else {
                // res.write(data)
                // res.end()

                // If you return a single arg. You can use,
                res.end(data)
            }
        })
    }
    else {
        console.log("There's No file like You Mentioned");
    }
})

// Starting the server and listening on port 3000
server.listen(3000, 'localhost', () => {
    console.log('Server is Listening'); // Confirms server is running
})

/*
======================== HTTP STATUS CODES ========================

1xx – Informational
--------------------------------------------------------------
Code | Name               | Description
--------------------------------------------------------------
100  | Continue           | Request received, continue sending data


2xx – Success
--------------------------------------------------------------
Code | Name               | Description
--------------------------------------------------------------
200  | OK                 | Request successful
201  | Created            | Resource successfully created
204  | No Content         | Success with no response body


3xx – Redirection
--------------------------------------------------------------
Code | Name               | Description
--------------------------------------------------------------
301  | Moved Permanently  | Resource moved to a new URL
302  | Found              | Temporary redirect
304  | Not Modified       | Cached version can be used


4xx – Client Errors
--------------------------------------------------------------
Code | Name               | Description
--------------------------------------------------------------
400  | Bad Request        | Invalid request from client
401  | Unauthorized       | Authentication required
403  | Forbidden          | Access denied
404  | Not Found          | Requested resource doesn’t exist
405  | Method Not Allowed | HTTP method not supported
409  | Conflict           | Request conflict with server state
429  | Too Many Requests  | Rate limit exceeded


5xx – Server Errors
--------------------------------------------------------------
Code | Name                  | Description
--------------------------------------------------------------
500  | Internal Server Error | Server failed to handle request
502  | Bad Gateway           | Invalid response from upstream server
503  | Service Unavailable   | Server temporarily down
504  | Gateway Timeout       | Server took too long to respond

==================================================================
*/
