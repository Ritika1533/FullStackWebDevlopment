function callTwice(func) {
    func();
    func();
}
function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}
callTwice(rollDice);
//4
//3
//=============================================================

function callDie(f) {
    for (let i = 0; i < 5; i++) {
        f();
    }
}
callDie(rollDice);
//4 3 5 1

//returning function===========================================

function mistry() {
    const num = Math.random();
    if (num > 0.5) {
        return function () {
            console.log("i am a good function");
        }
    }
    else {
        return rollDice();
    }
}
const holdmistry = mistry();

//==============================================================

function isBetween(num) {
    // if (uum>=50 && num<=100){
    //   return num;//58
    //}
    return num >= 50 && num >= 100;//true or false
}
isBetween(58);//true

function makeBetween(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}
const testRange = function (num) {
    return num >= min && num <= max;
}

const isChild = makeBetween(1, 18);
const isAdult = makeBetween(19, 60);
const isSenior = makeBetween(60, 120);
//    if we call ischild then it will retuen this
//                                                ƒ (num){
//                                                 return num>=min && num<=max;
//                                                }
//this means to say its a function we have to pass some argument in it
//then isChild(50) gives false
//