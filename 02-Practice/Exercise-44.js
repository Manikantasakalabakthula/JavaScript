// Write your JavaScript here
for (let i = 1; i <= 3; i++) {
    let row = ""
    for (let j = 1; j <= 4 - i; j++) {
        row += j + " "
    }

    console.log(row)
}
