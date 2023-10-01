function rolldice(sides = 9) {
    console.log(Math.floor(Math.random() * sides) + 1);
};
//default sides=6

function greet(name, msg = "goodevening") {
    console.log(`${msg},${name}`);
}
//greet("ry")
//goodevening,ry