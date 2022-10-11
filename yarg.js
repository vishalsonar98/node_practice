const yargs = require("yargs");


yargs.command({
    command:'remove',
    describe:'remove note',
    handler:function () {
        console.log("removing note")
    }
})
yargs.command({
    command:'add',
    describe:'add note',
    handler:function () {
        console.log("adding note")
    }
})

yargs.command({
    command:'read',
    describe:'read note',
    handler:function () {
        console.log("reading note")
    }
})
yargs.command({
    command:'list',
    describe:'list note',
    handler:function () {
        console.log("listing note")
    }
})
console.log(yargs.argv)
// console.log(process.argv)

