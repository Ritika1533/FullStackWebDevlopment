days = ['monday', 'tuesday'];
console.log(days);
days.push('wednesday'); //here we are pushing a element in the end of array and it is going to be updated
// in the original array but same not happens in the string
console.log(days);
// we can push many element we want to push like this
days.push('thursday', 'friday', 'saturday');
console.log(days);
//every time you print it will print the update version
days.pop();
//remember it will pop out the last element and we dont pass any argument in pop we can' pop out two element at one ime
console.log(days);
//now shift and unshift
//unshift add element at the begning and we can add many elementt at the same time
days.unshift('hello', 'hii');
console.log(days);
//shift remove element from the start and we dont need to pass argument and only one element is removed 
days.shift();
console.log(days);