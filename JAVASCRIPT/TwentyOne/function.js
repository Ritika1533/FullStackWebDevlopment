
//function defination

function singSong() {
    console.log("hello");
    console.log("hiii");
    console.log("bye bye");
}

//function call

singSong();
singSong();

//argument

function rant(message) {
    for (let i = 0; i < 3; i++) {
        console.log(message.toUpperCase());
    }
}

// Example usage:
rant("I hate beets");

//multiple argument

function repeat(msg, times) {
    for (let i = 0; i < times; i++) {
        console.log(msg);
    }
}
repeat("rit", 5);
//5 rit
//repeating same to get 5 times

function repeat(msg, times) {
    let result = "";
    for (let i = 0; i < times; i++) {
        result = result + msg;
    }
    console.log(result);
}
repeat("rit", 5);

//multiple arguments
function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die2 === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}

// Test cases
isSnakeEyes(1, 1); // Snake Eyes!
isSnakeEyes(1, 5); // Not Snake Eyes!
isSnakeEyes(4, 5); // Not Snake Eyes!

// return statement
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}
console.log(add(1, 'a'));//false
console.log(add(1, 9));//10)
console.log(add(9, add(6, 1)));//16

//printnull if array is empty and if not print last index of array

// DEFINE YOUR FUNCTION BELOW:
function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    }

    return arr[arr.length - 1];
}
lastElement([3, 5, 7]) //7
lastElement([1]) //1
lastElement([]) //null

//to capatalise the first letter
function capitalize(str) {

    return str.slice(0, 1).toUpperCase() + str.slice(1);
}
console.log(capitalize('eggplant'));//Eggplant
console.log(capitalize('pamplemousse'));//pamplemousse
console.log(capitalize('squid'));//Squid

//total of array element
function sumArray(arr) {
    total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total;
}
sumArray([1, 2, 3]); //6
sumArray([2, 2, 2, 2]); //8
sumArray([50, 50, 1]); //101

//days of week
function returnDay(num){
    if((num>=1 ) && (num<=7))
    {
        if(num===1) {
            return "Monday";
            
        }
        else if(num===2) {
            return "Tuesday";
            
        }
         else if(num===3) {
             return "Wednesday";
             
         }
         else if(num===4) {
             return "Thursday";
             
         }
         else if(num===5) {
             return "Friday";
             
         }
         else if(num===6) {
             return "Saturday";
             
         }
         else{
             return "Sunday";
             
         }

    }
    else{
    return null;
        
    }
}
returnDay(1);