const menu = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
	menu.classList.toggle("fa-times");
	navbar.classList.toggle("active");
});
