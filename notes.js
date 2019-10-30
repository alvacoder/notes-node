console.log('Starting notes...');

const fs = require('fs');

let addNote = (title, body) => {
    console.log('Adding note ', title, ':', body);
    let notes = [];
    let note = {title, body};

    try {
        let curNoteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(curNoteString);   
    } catch (error) {

    }

    let duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    } else {
        console.log('A note already exists with this title: ', title);
    }

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