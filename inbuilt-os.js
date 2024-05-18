// CommonJS
const os = require("os");

console.log("Total Memory: " + os.totalmem()); // Total RAM size in bytes

console.log("Free Memory: " + os.freemem()); // Free memory

console.log("Version: " + os.version()); // Version

console.log("System Info : " + os.cpus().toString()); // System
