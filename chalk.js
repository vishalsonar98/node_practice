const  chalk  = require('chalk')
const message = chalk.strikethrough.bold.inverse.red.bgBlack.italic('hello there')
console.log(message)

const command = process.argv[2]
if (command==="add") {
    console.log("note added")
} else if (command === 'remove'){
    console.log('note removed')
}
else
{
    console.log("insert command")
}