let totalEgg = 0;
function collectEggs() {
    totalEggs = 6;

}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);


//same variable inside and outside

let bird = "peacock";
function birdwatch() {
    let bird = "eagle";
    console.log(bird);
}

birdwatch();
//=================================
//let bird="peacock";
//function birdwatch(){
//  let bird="eagle";
//}console.log(bird);
//birdwatch();
//:5 peacock


//==================================
//let bird="peacock";
//function birdwatch(){
//  let bird="eagle";
//  console.log(bird);
//}
//console.log(bird);
//birdwatch();
// peacock
//eagle


// ===================================
//let bird="peacock";
//function birdwatch(){
//  let bird="eagle";
//   console.log(bird);
//}console.log(bird);
//birdwatch();
//VM107:5 peacock
//VM107:4 peacock

//====================================
let animal = "Giant Pacific Octopus";
function observe() {
    let animal = "Pajama Squid";
    console.log(animal);
}
observe();
//Pajama Squid

//======================================
const creature = "Common Sea Dragon";

function scubaDive() {
    const creature = "Spanish Dancer"; //A type of sea slug
    console.log(creature);
}

scubaDive();
//Spanish Dancer

//====================================

let deadlyAnimal = "Blue-Ringed Octopus";

function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal);
}

handleAnimal();
console.log(deadlyAnimal);
//Scorpionfish
//Blue-Ringed Octopus
