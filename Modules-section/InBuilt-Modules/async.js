const { readFile, writeFile } = require('fs');

readFile('./first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return null;
    } 

    const first = result;
    readFile('./second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return null;
        } 
        const second = result;
        writeFile('./third.txt', `here is the result ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        });
    
    }) 
});