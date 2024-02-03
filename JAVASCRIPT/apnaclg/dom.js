console.dir(document.getElementById("info"));
console.dir(document.getElementsByClassName("para"));
let h2 = document.querySelector("h2");
console.dir(h2);
h2.innerText = h2.innerText + " from apna collage";
let divs = document.querySelectorAll(".box");
//divs[0].innerText = "unique value 1";
//divs[1].innerText = "unique value 2";
//divs[2].innerText = "unique value 3";
let i = 0;
for (let val of divs) {
    val.innerText = `new unique value ${i}`;
    i++;
}
let p = document.querySelector("p");
console.dir(p);
p.getAttribute("id");
p.setAttribute("class", "newclass");
let btn = document.createElement("button");
btn.innerText = "submit";
console.dir(btn);
let ul = document.getElementsByTagName("ul");
console.dir(ul);
