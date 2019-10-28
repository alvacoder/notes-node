console.log('Starting App');

const os = require('os');
const user = os.userInfo();
const note = require('./notes');
console.log(user);
console.log(user.username);

const fs = require('fs');

fs.appendFile('greeting.txt', 'Hello ' + user.username, function (error) {
    if(error) {
        console.log('unable to write to file');
    }
})

let sum = note.addNote(7, -2);
console.log(sum);