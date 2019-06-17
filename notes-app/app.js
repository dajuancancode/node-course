const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is DaJuan.');

// Challange: Append a message to notes.txt

fs.appendFile('notes.txt', ' I like to code in Javascript.');
