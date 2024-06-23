const { readFileSync, writeFileSync } = require('fs');
 
const first = readFileSync('./first.txt', 'utf8');
const second = readFileSync('./second.txt', 'utf8');


writeFileSync('./write.txt', `Here is the file containing combined text of ${first} , and ${second}`
    //* {flag: 'a} allow you to append to the end of the file
);