const path = require('path')
//returns the directory name of a path, similar to the Unix dirname command. 
const dirName = path.dirname('/ashleyworkspace/Documentation')
console.log("directory name:",dirName);
// returns the extension of the path
const extension = path.extname('index.css')
console.log("Extension of index.css is: ",extension);
//The path.format() method returns a path string from an object. This is the opposite of path.parse().
// path.format({
//     root: '/ignored',
//     dir: '/home/user/dir',
//     base: 'file.txt'
//   });
  // Returns: '/home/user/dir/file.txt'

//The path.isAbsolute() method determines if path is an absolute path.
console.log("Is Absolute path: ",path.isAbsolute("/ashleyworkspace/Documentation"));
//The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
console.log("Path: ", path.join("D:","/ashleyworkspace","/Documentation"))
//The path.parse() method returns an object whose properties represent significant elements of the path. 
const pathobj = path.parse("D:\\ashleyworkspace\\Documentation")
console.log("Path Object: ", pathobj);