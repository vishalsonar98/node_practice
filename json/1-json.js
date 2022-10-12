const fs = require('fs')
// const book={
//     title:"xyz",
//     author:"abc"
// }

// const bookjson = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookjson)
const data=fs.readFileSync('1-json.json','utf-8')
const dataParse=JSON.parse(data)
dataParse.name='vishal'
dataParse.age='24'
const jsonData=JSON.stringify(dataParse);
fs.writeFileSync('1-json.json',jsonData)


// console.log(bookjson)
// const parseData = JSON.parse(bookjson)
// console.log(parseData)
// console.log(parseData.author)