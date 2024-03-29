const _ = require('lodash');
const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
        describe: 'Title of note',
        demand: true,
        alias : 't'
    }

const bodyOptions = {
        describe: 'Body of note',
        demand: true,
        alias: 'b'
    }

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read Note', {
        title: titleOptions
    })
    .command('remove', 'Remove note', {
        title: titleOptions
    })
    .help()
    .argv;
let command = argv._[0];

//console.log('Command: ' , command);
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
    let allNotes = notes.getAll();
    console.log(`${allNotes.length} notes found...`);
    allNotes.forEach((note) => notes.logNote(note));
} else {
    console.log('Command not recognised');
}