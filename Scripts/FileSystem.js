// Importing the built-in 'fs' (File System) module in Node.js
const fs = require('fs')

// Create Folder if it doesn't exist
if (!fs.existsSync('./docs')) {  // Check if './docs' folder exists
    fs.mkdir('./docs', (err) => {  // Create the folder
        if (err) {
            console.log(err.message);
        }
        else {
            console.log('Folder Created');
        }
    })
}
else {
    console.log('File Already Existed');
}

// Create a new file and write text into it
fs.writeFile('./docs/file1.txt', 'Hello World', (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log('File Created');
    }
})

// Read the file only if it exists
if (fs.existsSync('./docs/file1.txt')) {  // Check file existence
    fs.readFile('./docs/file1.txt', (err, data) => {  // Read file
        if (err) {
            console.log(err.message);
        }
        else {
            console.log(data.toString());  // Convert buffer to string
        }
    })
}
else {
    console.log("There's No file like You Mentioned");
}

// Delete the file if it exists
if (fs.existsSync('./docs/file1.txt')) {
    fs.unlink('./docs/file1.txt', (err) => {  // Delete file
        if (err) {
            console.log(err.message);
        }
        else {
            console.log('File Deleted Successfully.');
        }
    })
}
else {
    console.log("There's No file like You Mentioned");
}

// Delete the folder if it exists
if (fs.existsSync('./docs')) {
    fs.rmdir('./docs', (err) => {  // Remove folder
        if (err) {
            console.log(err.message);
        }
        else {
            console.log('Folder Deleted Successfully.');
        }
    })
}
else {
    console.log("There's No Folder like You Mentioned");
}
