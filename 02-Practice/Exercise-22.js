// Write your JavaScript here
let balance = 5000
let withdrawal = 3000
let pinCorrect = true
if (pinCorrect === false) {
    console.log("Incorrect PIN")
} else if (withdrawal <= 0) {
    console.log("Invalid withdrawal amount")
} else if (withdrawal > balance) {
    console.log("Insufficient balance")
} else {
    console.log("Withdrawal successful")
}
