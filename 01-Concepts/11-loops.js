// for Loop
// syntax
// for (initialization; condition; update) {
    // code to repeat
// }

// Increment ++
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

// Decrement --
for (let j = 10; j >= 5; j--) {
    console.log(j)
}

// +=
let k = 5
k += 5
console.log(k)

// -=
let l = 10
l -= 8
console.log(l)

// while Loop
// Increment ++
let m = 1
while (m <= 5) {
    console.log(m)
    m++
}

// Decrement --
let n = 10
while (n >= 5) {
    console.log(n)
    n--
}

// Even Numbers
let o = 2
while (o <= 10) {
    console.log(o)
    o += 2
}

// do...while
// Increment (++)
let p = 1
do {
    console.log(p)
    p++
} while (p <= 5)

// Decrement (--)
let q = 5
do {
    console.log(q)
    q--
} while (q >= 1)

// break
// using for
for (let r = 1; r <= 10; r++) {
    if (r === 5) {
        break
    }
    console.log(r)
}

// using while
let s = 10
while (s >= 1) {
    if (s === 5) {
        break
    }
    console.log(s)
    s--
}

// continue
for (let t = 1; t <= 10; t++) {
    if (t === 5) {
        continue
    }
    console.log(t)
}

// Nested Loop
for (let u = 1; u <= 3; u++) {
    for (let v = 1; v <= 2; v++) {
        console.log(u, v)
    }
}

for (let w = 1; w <= 3; w++) {
    for (let x = 1; x <= 2; x++) {
        console.log(w * x)
    }
}

const student = {
    name: "Manikanta",
    age: 23,
    course: "CSE"
}

for (let y in student) {
    console.log(y)
    console.log(student[y])
    console.log(y, student[y])
}

const fruits = ["Apple", "Banana", "Mango"]

for (let z of fruits) {
    console.log(z)
}