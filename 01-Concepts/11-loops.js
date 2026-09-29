// for Loop
// syntax
// for (initialization; condition; update) {
// code to repeat
// }

// Increment ++
for (let forIncrement = 1; forIncrement <= 5; forIncrement++) {
    console.log(forIncrement)
}

// Decrement --
for (let forDecrement = 10; forDecrement >= 5; forDecrement--) {
    console.log(forDecrement)
}

// +=
let additionResult = 5
additionResult += 5
console.log(additionResult)

// -=
let subtractionResult = 10
subtractionResult -= 8
console.log(subtractionResult)

// while Loop
// Increment ++
let whileIncrement = 1
while (whileIncrement <= 5) {
    console.log(whileIncrement)
    whileIncrement++
}

// Decrement --
let whileDecrement = 10
while (whileDecrement >= 5) {
    console.log(whileDecrement)
    whileDecrement--
}

// Even Numbers
let evenNumber = 2
while (evenNumber <= 10) {
    console.log(evenNumber)
    evenNumber += 2
}

// do...while
// Increment (++)
let doWhileIncrement = 1
do {
    console.log(doWhileIncrement)
    doWhileIncrement++
} while (doWhileIncrement <= 5)

// Decrement (--)
let doWhileDecrement = 5
do {
    console.log(doWhileDecrement)
    doWhileDecrement--
} while (doWhileDecrement >= 1)

// break
// using for
for (let breakForCounter = 1; breakForCounter <= 10; breakForCounter++) {
    if (breakForCounter === 5) {
        break
    }
    console.log(breakForCounter)
}

// using while
let breakWhileCounter = 10
while (breakWhileCounter >= 1) {
    if (breakWhileCounter === 5) {
        break
    }
    console.log(breakWhileCounter)
    breakWhileCounter--
}

// continue
for (let continueCounter = 1; continueCounter <= 10; continueCounter++) {
    if (continueCounter === 5) {
        continue
    }
    console.log(continueCounter)
}

// Nested Loop
for (let outerCounter = 1; outerCounter <= 3; outerCounter++) {
    for (let innerCounter = 1; innerCounter <= 2; innerCounter++) {
        console.log(outerCounter, innerCounter)
    }
}

for (
    let productOuterCounter = 1;
    productOuterCounter <= 3;
    productOuterCounter++
) {
    for (
        let productInnerCounter = 1;
        productInnerCounter <= 2;
        productInnerCounter++
    ) {
        console.log(productOuterCounter * productInnerCounter)
    }
}

const student = {
    name: "Manikanta",
    age: 23,
    course: "CSE",
}

for (let key in student) {
    console.log(key)
    console.log(student[key])
    console.log(key, student[key])
}

const fruits = ["Apple", "Banana", "Mango"]

for (let fruit of fruits) {
    console.log(fruit)
}
