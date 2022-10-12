const fs=require('fs');

fs.writeFileSync('name.txt','my name is vishal');
fs.writeFileSync('name.txt','my name is john\n');
fs.appendFileSync('name.txt','my name is vishal');