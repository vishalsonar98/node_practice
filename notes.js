const fs = require('fs')
const chalk = require('chalk')
const getNote = function () {
    return "your notes..."
}

const removeNote = function (title){
    const notes = loadNote();
    const filteredNotes = notes.filter(e => e.title !== title)
    if (filteredNotes.length === notes.length) {
        console.log(chalk.red.bold('note not present...'));
    } else {
        saveNotes(filteredNotes)
        console.log(chalk.green("note deleted successfully..."));
    }
}
const addNote = function (title, body) {
    
    const note = loadNote();
    const findDuplicate = note.filter(function(notes){
            return notes.title === title;
        }
    )
    debugger
    if (findDuplicate.length === 0) {
        
        note.push({
            title: title,
            body: body
        })

        saveNotes(note);
        console.log(chalk.green("note saved successfully..."));
    } else {
        console.log(chalk.red.bold.inverse("found note with same title..."));
    }
}

const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
    
}

const loadNote = function () {
    try {
        const dataJson = fs.readFileSync('notes.json', 'utf-8')
        return JSON.parse(data)
    } catch (e) {
        return [];
    }
}
const readNotes = function () {
    try {
        const notes = fs.readFileSync('notes.json', 'utf-8')
        console.log(notes);
    } catch (e) {
        return [];
    }
}

const readNoteByTitle = (title) =>{
    try {
        const notesData = loadNote();
        const note = notesData.filter(e => e.title == title);
        note.length==0 ? console.log(chalk.red.bold("Enter valid title...")) : console.log(note)

    } catch (error) {
        return console.log(error);;
    }
}
module.exports = {
    getNote: getNote,
    addNote: addNote,
    readNotes: readNotes,
    removeNote: removeNote,
    readNoteByTitle: readNoteByTitle
}