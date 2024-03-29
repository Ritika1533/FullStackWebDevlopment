const fs = require("node:fs");
//fs.readFile("file.txt", "utf8", (err, data) => {
//if (err) throw err;
//console.log(data);
//});
//finished reading
//hello, I am Ritika Keshri.

/*
const a = fs.readFileSync("file.txt");
//console.log(a);//<Buffer 68 65 6c 6c 6f 2c 20 49 20 61 6d 20 52 69 74 69 6b 61 20 4b 65 73 68 72 69 2e>
console.log(a.toString());
console.log("finished reading");
//hello, I am Ritika Keshri.
//finished reading
*/

/*
fs.writeFile("file2.txt", "this is second file ritika", (err) => {
	if (err) throw err;

	console.log("written");
});
console.log("finished");
*/

const b = fs.writeFileSync("file3.txt", "this is third file ritika");
console.log(b);
console.log("written");
