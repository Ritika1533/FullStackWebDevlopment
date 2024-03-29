const path = require("node:path");
const a = path.basename("C:\\temp\\myfile.html"); // Returns: 'myfile.html'
console.log(a);
const b = path.dirname("/foo/bar/baz/asdf/quux"); // Returns: '/foo/bar/baz/asdf'
console.log(b);
const c = path.basename("C:\\temp\\myfile.html"); // Returns: 'myfile.html'
console.log(c);
const d = path.extname(__filename);
console.log(d);
