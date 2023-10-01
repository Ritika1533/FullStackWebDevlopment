let radius = [2, 4, 6, 8];
let calculatearea = function (radius) {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}