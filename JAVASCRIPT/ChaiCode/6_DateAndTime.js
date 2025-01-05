//DATE (object)AND TIME
// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// Sun Jan 05 2025 09:17:22 GMT+0530 (India Standard Time)
// Sun Jan 05 2025
// 2025-01-05T03:47:22.075Z
// 2025-01-05T03:47:22.075Z
// 5/1/2025
// 5/1/2025, 9:17:22 am
// let myCreatedDate = new Date(2025, 0, 10);//Fri Jan 10 2023
//let myCreatedDate = new Date(2025, 0, 10, 5, 4); //10/1/2025, 5:04:00 am
// let myCreatedDate = new Date("2025-07-10"); //10/7/2025, 5:30:00 am
// let myCreatedDate = new Date("10-07-2025"); //7/10/2025, 12:00:00 am
// console.log(myCreatedDate.toLocaleString());

//TIMESTAMPS ---> used to decide fast poll and fast quiz attempted
// let myTimeStamp = Date.now();
// console.log(myTimeStamp); // Logs the timestamp as a number
//console.log(myTimeStamp.getTime()); Logs the same timestamp using getTime()

let today = new Date();

// Day of the month
console.log("Day of the month:", today.getDate());

// Month (1-based, so adding 1 to get correct month)
console.log("Month:", today.getMonth() + 1);

// Full Year
console.log("Year:", today.getFullYear());

// Short weekday (e.g., Mon, Tue)
console.log(
	"Short weekday:",
	today.toLocaleString("default", { weekday: "short" })
);

// Full weekday (e.g., Monday, Tuesday)
console.log(
	"Full weekday:",
	today.toLocaleString("default", { weekday: "long" })
);

// Short month name (e.g., Jan, Feb)
console.log(
	"Short month:",
	today.toLocaleString("default", { month: "short" })
);

// Full month name (e.g., January, February)
console.log("Full month:", today.toLocaleString("default", { month: "long" }));

// Day of the week as a number (0 = Sunday, 6 = Saturday)
console.log("Day of the week:", today.getDay());

// Date in a readable format
console.log(
	"Formatted Date:",
	today.toLocaleDateString("default", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	})
);
