const path = ('path');

console.log(path.sep);
const filePath = path.join('/content', 'subfolder', 'test.txt');
//console.log(filePath);

const base = path.basename(filePath);
console.log(base);

// **RETURNING UN ABSOLUTE PATH ACCEPTS PATH SEGMENTS OR A SEQUENCY OF AND RESOLVES IT INTO UN ABSOLUTE PATH.

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);