/* 
//convert jsn to string
let obj = {
    name : 'Viper'
};

let stringObj = JSON.stringify(obj);

console.log(typeof stringObj, stringObj);

// convert string to json
 let personString = '{"name":"viper", "age":"22"}';

 let personObj = JSON.parse(personString);

 console.log(typeof personObj, personObj);

 */

 const fs = require('fs');

 let originalNote = {
     title : 'love secret',
     body : 'I love Naomi'
 }

 let originalNoteString = JSON.stringify(originalNote);

 //fs.writeFileSync('notes.json', originalNoteString);

 let noteString = JSON.parse(fs.readFileSync('notes.json'));
 console.log(noteString.title);