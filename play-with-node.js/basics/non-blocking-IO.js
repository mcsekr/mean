
import fs from 'fs';

fs.readFile('./data.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

console.log("do something else");