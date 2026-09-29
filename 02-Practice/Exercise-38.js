// Write your JavaScript here
let student = {
    name: "Rahul",
    age: 22,
    city: "Hyderabad",
    course: "JavaScript",
}
for (let key in student) {
    console.log(`${key}: ${student[key]}`)
}
