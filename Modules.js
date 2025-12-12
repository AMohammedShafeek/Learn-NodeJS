// Importing values from the local file "Data.js"
// Using object destructuring to extract 'names' and 'age'
const { names, age } = require('./Data');

// Other Way
const imports = require('./Data');

//Logging the imported values with imports.variableName
console.log(imports.age);
console.log(imports.names);

// Logging the imported values directly
console.log("Imported Names:", names);
console.log("Imported Age:", age);

// -----------------------------------------------

// Importing Node.js built-in module "os"
// 'os' module helps to get system-related information
const os = require('os');

// Logging complete OS module (for understanding available methods)
console.log("OS Module Details:", os);

// Getting the user's home directory path
console.log("Home Directory:", os.homedir());

