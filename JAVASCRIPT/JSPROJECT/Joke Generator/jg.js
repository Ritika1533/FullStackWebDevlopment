const URL =
	"https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const btn = document.querySelector("#btn");
const para = document.querySelector("#para");

async function getJokes() {
	let response = await fetch(URL);
	let data = await response.json();
	console.log(data);
	console.log(data.joke);
	para.innerText = data.joke;
}
btn.addEventListener("click", getJokes);
