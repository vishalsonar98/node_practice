const os = require('os')
//returns architecture of os
const architecture = os.arch();
console.log("architecture of os is: ",architecture);
//Returns an array of objects containing information about each logical CPU core.
const cpus = os.cpus()
console.log(cpus);
//Returns the amount of free system memory in bytes as an integer.
const freememory = os.freemem()
console.log("Available memory: ",freememory);
//Returns the total amount of system memory in bytes as an integer.
const totalMemory = os.totalmem()
console.log("Total memory: ",totalMemory);
//Returns the string path of the current user's home directory.
const homeDirectory = os.homedir()
console.log("home directory: ",homeDirectory)
//Returns the host name of the operating system as a string.
const hostName = os.hostname()
console.log("Host name: ", hostName);
//Returns an array containing the 1, 5, and 15 minute load averages.
//The load average is a Unix-specific concept. On Windows, the return value is always [0, 0, 0].
const loadavg=os.loadavg()
console.log("load average: ",loadavg);
//Returns the operating system name
const name = os.type()
console.log("Operating System: ",name);
//Returns the operating system as a string.
const release = os.release()
console.log("current release of os is: ",release);
//Returns the operating system's default directory for temporary files as a string.
const temp = os.tmpdir()
console.log("path of temp dir is: ",temp);
//Returns the system uptime in number of seconds.
const upTime = os.uptime()
console.log("uptime: ",upTime);
//Returns a string identifying the kernel version.
const kVersion = os.version()
console.log("Os version: ", kVersion);
//Returns the machine type as a string available for 16.18.0 version
// const machineType = os.machine();
// console.log("Type of machine: ", machineType);
