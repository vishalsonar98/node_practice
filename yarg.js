const yargs = require("yargs");


yargs.command({
    command:'remove',
    describe:'remove note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Body of note',
            demandOption:true,
            type:'string'
        }
    },
    handler:function (argv) {
        console.log("removing note",argv)
    }
})
yargs.command({
    command:'add',
    describe:'add note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Body of note',
            demandOption:true,
            type:'string'
        }
    },
    handler:function (argv) {
        console.log("title: " + argv.title)
        console.log("body: " + argv.body)
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
// console.log(yargs.argv)
// console.log(process.argv)
yargs.parse()
