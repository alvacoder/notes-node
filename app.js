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
    let note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log(note.title, ' was added successfully.');
        notes.logNote;
    } else {
        console.log('Note title already exists.');
    }
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    noteRemoved ? console.log(`${argv.title} was removed successfully.`) : console.log(`Error: ${argv.title} not found.`);
} else if (command === 'write') {
    console.log('Writing to note...');
} else if (command === 'read') {
    let note = notes.getNote(argv.title);
    if(note) {
        console.log('Note read successfully.');
        notes.logNote(note);
    } else {
        console.log(`${argv.title} not found.`);
    }
} else if (command === 'list') {
    console.log('Listing all notes...');
} else {
    console.log('Command not recognised');
}