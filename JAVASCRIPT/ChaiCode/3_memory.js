// primitive --> stack (copy)
//non primitive -->heap(reference)
console.log("stack");
let myName = "ritika";
let myNewName = myName;
myNewName = "ritika keshri";

console.log(myName); //ritika
console.log(myNewName); //ritika keshri

console.log("heap");
let detail = {
	name: "ritika",
	age: 23,
};
let newDetail = detail;
newDetail.name = "ritika keshri";
console.log(detail.name); //ritika keshri
console.log(newDetail.name); //ritika keshri
