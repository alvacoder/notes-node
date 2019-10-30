console.log('Starting App');

const _ = require('lodash');
const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
let command = argv._[0];

console.log('Command: ' , command);
//console.log('Yargs: ' , argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log(argv.title, ' was created successfully');
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log('Note title already exists.');
    }
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else if (command === 'write') {
    console.log('Writing to note...');
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'list') {
    console.log('Listing all notes...');
} else {
    console.log('Command not recognised');
}