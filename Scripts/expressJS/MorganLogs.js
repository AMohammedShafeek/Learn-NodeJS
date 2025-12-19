// Importing the Express framework
const express = require('express')

// Importing the morgan Func
const morgan = require('morgan')

// Creating an Express application instance
const app = express()

// Starting the server on port 3000
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})

//Logging Dev using morgan
app.use(morgan('dev'))

// Route: GET /
// sendFile() is used to send static HTML files
// __dirname gives the current directory path

// Serves the index.html file from the FrontEnd folder
app.get('/', (req, res) => {
    res.sendFile('/FrontEnd/index.html', { root: __dirname })
})

// Redirects /home requests to the root route (/)
app.get('/home', (req, res) => {
    res.redirect('/')
})

// Serves the about.html file
app.get('/about', (req, res) => {
    res.sendFile('/FrontEnd/about.html', { root: __dirname })
})

// Serves the services.html file
app.get('/services', (req, res) => {
    res.sendFile('/FrontEnd/services.html', { root: __dirname })
})

// Middleware for handling 404 errors
// This runs when no route above matches the request
app.use((req, res) => {
    res.status(404).sendFile('/FrontEnd/notFound.html', { root: __dirname })
})
