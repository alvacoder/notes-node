console.log('Starting notes...');

const fs = require('fs');

let addNote = (title, body) => {
    console.log('Adding note ', title, ':', body);
    let notes = fetchNotes();
    let note = {title, body};

    let duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNote(notes);
        return note;
        
    } else {
        
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

let fetchNotes = () => {
    try {
        let curNoteString = fs.readFileSync('notes-data.json');
        return JSON.parse(curNoteString);   
    } catch (error) {
        return [];
    }
}

let saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

module.exports = {
    addNote,
    removeNote,
    getNote,
    getAll
}