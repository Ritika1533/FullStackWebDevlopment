
// spread in array

let a = [1, 2, 3];
let b = a;
a.push(7);
console.log(a);//[1,2,3,7]
console.log(b);//[1,2,3,7]
//because of reference  type
let c = [1, 2, 3];
let d = [...c];
c.push(7);
console.log(c);//[1,2,3,7]
console.log(d);//[1,2,3]



//---------------------------------------------------------


let BigCat = ["tiger", "lion"];
let Bird = ["eagle", "valture", "crow"]
//spread operator

let amimal = [...BigCat, "horse", "cow", ...Bird, "buffallo"];
// ['tiger', 'lion', 'horse', 'cow', 'eagle', 'valture', 'crow', 'buffallo']
const str = [..."hello"];
//(5) ['h', 'e', 'l', 'l', 'o']


//-------------------------------------------------------------------------------------------------------------------------------------

//REST in function
//rest  in function-zada argument pass kie wo other me store kr lega  or array ka set bna lega if not used rest(...other )
//here not change in results but can be able to access the other element
//in short jo v aap pass kar ehe h wo combine ho jainge in rest


function add(a, b, c, ...other) {
    console.log(other);//['11','14']
    //console.log(other[0]);//11
    return a + b + c;
}
const addation = add(6, 7, 9, 11, 14);
console.log(addation);




//------------------------------------------------------------------------------------------------------------------------
//spread in function- yha chize break karte h or tukde me recieve karte h
const names = ["ritika", "ritik", "aditi"];
function getNames(name1, name2, name3) {
    console.log(name1, name2, name3);

}
getNames(names[0], names[1], names[2]);//ritika ritik aditi, alag alag print kraia h
getNames(names);//as a array pass hua h  ['ritika', 'ritik', 'aditi']
getNames(...names);//ritika ritik aditi



//SPREAD IN OBJECT
const recorddd = { coursename: "javascript", rating: "good" };
const recordnewww = recorddd;
recorddd.coursename = "php";
console.log(recorddd);//{coursename: 'php', rating: 'good'}
console.log(recordnewww);//{coursename: 'php', rating: 'good'}


const record = { coursename: "javascript", rating: "good" };
const recordnew = { ...record };
record.coursename = "php";
console.log(record);//{coursename: 'php', rating: 'good'}
console.log(recordnew);//{coursename: 'javascript', rating: 'good'}


const abc = { a: "aaa", b: "bbb" };
const def = { d: "ddd", e: "eee" };
const abcdef = { ...abc, c: "ccc", ...def, f: "fff" };
console.log(abcdef);//{a: 'aaa', b: 'bbb', c: 'ccc', d: 'ddd', e: 'eee',f:'fff'}
