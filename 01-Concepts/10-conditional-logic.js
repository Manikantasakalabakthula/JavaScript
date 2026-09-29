// Conditions Using Comparison Operators

let marks = 80;

if (marks > 50) {
    console.log("Good marks");
}

let username = "admin";

if (username === "admin") {
    console.log("Welcome");
}

let password = "hello";

if (password !== "admin") {
    console.log("Wrong password");
}


// Conditions Using Logical Operators

let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense === true) {
    console.log("You can drive");
}

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("No work");
}

let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please login");
}

// Combining Comparisons + Logical Operators
let hasID = true;
let hasTicket = true;

if (age >= 18 && hasID === true && hasTicket === true) {
    console.log("Entry allowed");
} else {
    console.log("Entry denied");
}
