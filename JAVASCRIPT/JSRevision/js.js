console.log("hello");
let pHide = document.getElementById("hide");
function toggle() {
	if (pHide.style.display === "none") {
		pHide.style.display = "block";
	} else {
		pHide.style.display = "none";
	}
}

let pIncrease = document.getElementById("increase");
function fontIncrease() {
	pIncrease.style.fontSize = "40px";
}

let pInsert = document.getElementById("insert");
pInsert.innerText = "paragraph added";

let htmlcontent = document.getElementById("htmlcontent");
console.log(htmlcontent.innerHTML);
console.log(htmlcontent.innerText);
