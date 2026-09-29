// Write your JavaScript here
let age = 22
let hasID = true
let isBanned = false
if (age < 18) {
    console.log("Too young")
} else if (hasID === false) {
    console.log("ID required")
} else if (isBanned === true) {
    console.log("Entry denied: banned")
} else {
    console.log("Entry allowed")
}
