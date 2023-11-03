const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //console.log("first promise");
        resolve("value1");
    }, 11000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("second promise");
        resolve("value2");
        // reject(new Error("rejected"));
    }, 2000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("third promise");
        resolve("value3");
    }, 3000);
});
//1.want to give all output  same time p3(p2(p1))

//let promiseAll = Promise.all([p1, p2, p3]);
//promiseAll.then((value) => {
//  console.log(value);
//})
//(3) ['value1', 'value2', 'value3']
//if anyone rejected: Uncaught (in promise) rejected



//2. want to ignore error and give other output
//let promiseAll = Promise.allSettled([p1, p2, p3]);
//promiseAll.then((value) => {
//  console.log(value);
//})
//0 {status: 'fulfilled', value: 'value1'}
//1: {status: 'rejected', reason: 'rejected'}
//2: {status: 'fulfilled', value: 'value3'}

//3.will give the first resolved/rejected one
//let promiseAll = Promise.race([p1, p2, p3]);
//promiseAll.then((value) => {
//    console.log(value);
//})

//4.will give first resolved one
//let promiseAll = Promise.any([p1, p2, p3]);
//promiseAll.then((value) => {
//    console.log(value);
//})

//5.give resolved
//let promiseAll = Promise.resolve(8);
//promiseAll.then((value) => {
//    console.log(value);
//})
let promiseAll = Promise.reject(new Error("i am error"));
promiseAll.then((value) => {
    console.log(value);
})