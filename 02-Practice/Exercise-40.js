// Write your JavaScript here
let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
for (let number of numbers) {
    if (number % 2 === 0) {
        continue
    }
    console.log(number)
}
