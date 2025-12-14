// Importing the built-in File System module
const fs = require('fs')

// Creating a readable stream for a very large text file (Streams help handle large files efficiently without loading everything into memory)
const readStream = fs.createReadStream('./File/HugeFile.txt', { encoding: 'utf-8' })

// Creating a writable stream to write streamed data into another file
const writeStream = fs.createWriteStream('./File/WriteHugeFile.txt')

// Stream Piping
readStream.pipe(writeStream)