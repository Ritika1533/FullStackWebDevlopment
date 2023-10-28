const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const spans = document.querySelectorAll('span');
let count = 0;
for (let letter of spans) {
    letter.style.color = colors[count];
    count++;
}