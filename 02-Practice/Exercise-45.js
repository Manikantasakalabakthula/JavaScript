// Write your JavaScript here
let numbers = [3, 8, 12, 5, 20, 7, 16, 9]
for (let number of numbers) {
    if (number % 2 !== 0) {
        continue
    }
    if (number % 2 === 0 && number > 15) {
        console.log(number)
        break
    }
}
