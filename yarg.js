const yargs = require("yargs");
const { removeNote, readNoteByTitle } = require("./notes.js");
const notes = require('./notes.js')

yargs.command({
    command:'remove',
    describe:'remove note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function (argv) {
        removeNote(argv.title)
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
        notes.addNote(argv.title,argv.body)
       
    }
})


yargs.command({
    command:'read',
    describe:'read note',
    builder :{
        title:{
            describe:"note title",
            demandOption:true,
            type:'string'
        }
    },
    handler:function (argv) {
        readNoteByTitle(argv.title);
    }
})
yargs.command({
    command:'list',
    describe:'list note',
    handler:function () {
        notes.readNotes();
    }
})
// console.log(yargs.argv)
// console.log(process.argv)
yargs.parse()
