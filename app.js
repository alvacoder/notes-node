console.log('Starting App');

const _ = require('lodash');
const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes');

let command = process.argv[2];
const argv = yargs.argv;

console.log('Command: ' , command);
console.log('Yargs: ' , argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else if (command === 'write') {
    console.log('Writing to note...');
} else if (command === 'read') {
    notes.readNote(argv.title, argv.body);
} else if (command === 'list') {
    console.log('Listing all notes...');
} else {
    console.log('Command not recognised');
}