// Importing the built-in File System module
const fs = require('fs')

// Creating a readable stream for a very large text file (Streams help handle large files efficiently without loading everything into memory)
const readStream = fs.createReadStream('./File/HugeFile.txt', { encoding: 'utf-8' })

// Creating a writable stream to write streamed data into another file
const writeStream = fs.createWriteStream('./File/WriteHugeFile.txt')

// ---------------------------------------------------------
// Listening for 'data' event from read stream
// This event fires whenever a new chunk (buffer) of data is read
// ---------------------------------------------------------
readStream.on('data', (buffer) => {
    console.log('\nNew Buffer Received\n'); // Indicates arrival of a new data chunk
    console.log(buffer); // Logs chunk data (useful for understanding stream behavior)
})

// ---------------------------------------------------------
// Writing streamed data chunk-by-chunk into another file
// This avoids memory overload for huge files
// ---------------------------------------------------------
readStream.on('data', (buffer) => {
    console.log('\nWriting Buffer to File\n'); // Indicates writing of a new writing data chunk
    writeStream.write(buffer); // Writes each chunk to the output file
})