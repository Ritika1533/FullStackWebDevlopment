let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("27 deg");
    }, 2000);
});
let bangloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("21 deg");
    }, 5000);
});
async function weatherReport() {
    const delhiW = await delhiWeather;
    console.log("delhi weather report " + delhiW);
    const bangloreW = await bangloreWeather;
    console.log("banglore weather report " + bangloreW);
}
weatherReport();
console.log("hii");
//hii
//await.js:13 delhi weather report 27 deg
//await.js:15 banglore weather report 21 deg