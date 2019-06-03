// const fs = require('fs');

const utils = require('./utils.js');
const getNotes = require('./notes.js');

// fs.writeFileSync('notes.txt', 'This file was edited by Nodejs.');
// fs.appendFileSync('notes.txt', ' This text is appended by Nodejs')

const testSum = utils.sum(9,4)
console.log(testSum);

const notes = getNotes()
console.log(notes);