console.log('Starting notes...');

const fs = require('fs');

let addNote = (title, body) => {
    console.log('Adding note ', title, ':', body);
    let notes = [];
    let note = {title, body};

    let curNoteString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(curNoteString);

    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

}

let removeNote = (title) => {
    console.log('Removing note: ', title);
}

let getNote = (title) => {
    console.log('Getting  note : ', title);
}

let getAll = () => {
     console.log('Getting all notes');
}

module.exports = {
    addNote,
    removeNote,
    getNote,
    getAll
}