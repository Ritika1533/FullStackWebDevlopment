let name = "ritika";
// let repo = 6;
// console.log(`My Name is ${name} and my repo count is ${repo}`);

// let myName = new String("Ritika");
// console.log(myName.__proto__);
// console.log(myName.endsWith("ty"));
// console.log(myName.at(3));
let str = "Returns the-character at-the specified position.";
//------------------------------------STRING METHOD -----------------------------

//index start from 0
//A at(index): Returns the character at the specified position.
console.log(str.at(5));
//B bold(): Wraps the string in <b> tags (deprecated).
console.log(str.bold());
//C charAt(index): Returns the character at the specified index.
//  charCodeAt(index): Returns the Unicode of the character at the specified index.
//  concat(...strings): Concatenates two or more strings.
console.log(str.charAt(9));
console.log(str.charCodeAt(4));
console.log(name.concat(str));
//E  endsWith(searchString, length): Checks if a string ends with the specified substring
console.log(str.endsWith("ion."));
//F  fontcolor(color): Wraps the string in <font> tags with the specified color (deprecated).
//   fontsize(size): Wraps the string in <font> tags with the specified size (deprecated).
console.log(str.fontcolor("red"));
console.log(str.fontsize(5));
//I  includes(searchString, position position to start the string): Checks if a string contains the specified substring.
//   indexOf(searchString, position to start the string): Returns the first occurrence of a substring.
console.log(str.includes("at-")); //default is zero
console.log(str.includes("at-", 30));
console.log(str.indexOf("position"));
//L  lastIndexOf(searchString, position): Returns the last occurrence of a substring.
//   localeCompare(compareString): Compares two strings lexicographically based on the locale and returns a number that indicates the relationship between the two strings (whether they are equal, or if one is less than or greater than the other).
console.log(str.lastIndexOf("n"));
console.log(name.localeCompare(str));
console.log(str.localeCompare(name));
console.log(str.length);
//M  match(regexp): Matches a string against a regular expression.
console.log(str.match(/\b\w{8}\b/g));
console.log(str.match(/(\b\w{3}\b)/));
//P  padEnd(targetLength(> length), padString): Pads the string at the end to the specified length.
//   padStart(targetLength, padString): Pads the string at the start to the specified length.
console.log(str.padEnd(54, "*******"));
console.log(str.padStart(60, "*"));
//R  repeat(count): Repeats the string count times.
//   replace(searchValue, newValue): Replaces occurrences of a substring or pattern with a new string.
//   replaceAll(searchValue, newValue): Replaces all occurrences of a substring or pattern with a new string.
console.log(str.repeat("2"));
console.log(str.replace("-", "**"));
console.log(str.replaceAll("-", "**"));
//S  search(regexp): Searches for a match and returns the index of the match.
//   slice(beginIndex, endIndex): Extracts a section of the string.
//   split(separator, limit): Splits a string into an array based on a separator.
//   startsWith(searchString, position): Checks if a string starts with the specified substring.
//   strike(): Wraps the string in <strike> tags (deprecated).
//   sub(): Wraps the string in <sub> tags (deprecated).
//   sup(): Wraps the string in <sup> tags (deprecated).
console.log(str.search(/specified/));
console.log(str.slice(0, 5));
console.log(str.split("-"));
console.log(str.startsWith("at"));
console.log(str.startsWith("at", 7));
//T  toLocaleLowerCase(locale): Converts the string to lowercase using locale rules.
//   toLocaleUpperCase(locale): Converts the string to uppercase using locale rules.
//   toLowerCase(): Converts the string to lowercase.
//   toString(): Returns the string value of an object.
//   toUpperCase(): Converts the string to uppercase.
//   trim(): Removes whitespace from both ends of the string.
//   **trimEnd() / trimRight(): Removes whitespace from the end of the string.
//   **trimStart() / trimLeft(): Removes whitespace from the start of the string.
