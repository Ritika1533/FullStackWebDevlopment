function callback2() {
	console.log("keshri");
}

function loadScript(src, callback) {
	const sc = document.createElement("script");
	sc.src = src;
	try {
		sc.onload = callback(callback2);
		document.head.appendChild(sc);
		console.log("no error");
	} catch (err) {
		console.log(err);
	}
}
loadScript(
	"https://example.com/fontawesome/v6.5.1/js/solid.js",
	(callback2) => {
		console.log("keshri");
		callback2();
	}
);
