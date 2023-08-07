
import fs from "fs" // esm

const notes = fs.readFileSync("./data.txt", "utf-8")
console.log(notes);
console.log("do something else");


