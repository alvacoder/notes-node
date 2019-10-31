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
    let notes = fetchNotes();
    let filteredNote = notes.filter((note) => note.title !== title);
    saveNote(filteredNote);
    return notes.length !== filteredNote.length;
}

let getNote = (title) => {
    console.log('Fetching note : ', title);
    let notes = fetchNotes();
    let filteredNote = notes.filter((note) => note.title === title);
    return filteredNote[0];
}

let getAll = () => {
     console.log('Getting all notes');
     let notes = fetchNotes();
     return notes;
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

let logNote = (note) => {
    //debugger;
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    removeNote,
    getNote,
    getAll,
    logNote
}