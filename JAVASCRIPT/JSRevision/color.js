const btn = document.getElementById("btn");
const para = document.getElementById("para");
const div = document.getElementById("div");
btn.addEventListener("click", () => {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 265);
	let b = Math.floor(Math.random() * 256);
	let rgb = `rgb(${r}, ${g}, ${b})`;
	para.innerText = rgb;
	document.body.style.backgroundColor = rgb;
});
