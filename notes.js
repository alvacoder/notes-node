console.log('Starting notes...');

let addNote = (title, body) => {
    console.log('Adding note ', title, ':', body);
}

let removeNote = (title) => {
    console.log('Removing note: ', title);
}

let getNote = (title) => {
    console.log('Getting note : ', title);
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