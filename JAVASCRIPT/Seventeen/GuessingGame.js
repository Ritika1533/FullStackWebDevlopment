let maximum = parseInt(prompt("ENTER YOUR MAXIMUM NUMBER "));
while (!maximum) {
    maximum = parseInt(prompt("ENTER A VALID NUMBER "));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("enter your guess"));
let attempt = 1;
//if our guess is aaa then??
while (parseInt(guess) !== targetNum) {
    if (guess === 'q')
        break;
    if (guess > targetNum) {
        guess = prompt("TOO HIGH!! Enter your guess again");
    }
    else {
        guess = prompt("TOO LOW!! Enter your guess again");
    }
    attempt++;
}
if (guess === 'q') {
    console.log("OKK !!QUITING!!")
}
else {
    console.log(`YES YOU GOT IT!!! IT TOOL YOU ${attempt} gusesses`);
}