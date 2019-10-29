console.log('Starting App');

const _ = require('lodash');
const fs = require('fs');

const note = require('./notes');

let command = process.argv[2];
console.log('Command: ' + command);
console.log(process.argv);

if (command === 'add') {
    console.log('Adding new note...');
} else if (command === 'remove') {
    console.log('Removing note...');
} else if (command === 'write') {
    console.log('Writing to note...');
} else if (command === 'read') {
    console.log('Reading note...');
} else {
    console.log('Command not recognised');
}