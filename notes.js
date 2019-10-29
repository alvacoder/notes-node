console.log('Starting notes...');

addNote = (title, body) => {
    console.log('Adding note ', title, ':', body);
}

removeNote = (title) => {
    console.log('Removing note: ', title);
}

readNote = (title, body) => {
    console.log('Reading note : ', title);
}

getAll = () => {
     console.log('Getting all notes');
}

module.exports = {
    addNote,
    removeNote,
    readNote,
    getAll
}