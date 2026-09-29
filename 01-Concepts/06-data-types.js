// data types

// primitive data types
// String
let myString = "Manikanta"
console.log(myString)
console.log(typeof myString)

// Number
let myNumber = 23
console.log(myNumber)
console.log(typeof myNumber)

// BigInt
let largeNum = BigInt(123456789987654321123456789987654321)
console.log(largeNum)
console.log(typeof largeNum)

// Boolean
let isLearnJavaScript = true
console.log(isLearnJavaScript)
console.log(typeof isLearnJavaScript)

// Undefined
let greeting
console.log(greeting)
console.log(typeof greeting)

// Null
let myNull = null
console.log(myNull)
console.log(typeof myNull)

// Symbols
const firstSymbol = Symbol("Manikanta")
const secondSymbol = Symbol("Manikanta")
console.log(firstSymbol === secondSymbol)

// non-primitive data types
// object
const employeeAddress = {
    presentAddress: "Present Address",
    currentAddress: "Current Address",
}

const employeeSalary = {
    salary: 25000,
    bonus: 5000,
}

const employeeDetails = {
    employeeId: 101,
    employeeName: "Manikanta",
    employeeAddress: employeeAddress,
    employeeSalary: employeeSalary,
}
console.log(employeeDetails)
console.log(typeof employeeDetails)

// create
employeeDetails.position = "Team Lead"
console.log(employeeDetails)

// read
let employeeId = employeeDetails.employeeId
console.log(employeeId)

// update
employeeDetails.employeeId = 201
console.log(employeeDetails.employeeId)

// delete
delete employeeDetails.employeeId
console.log(employeeDetails)

// arrays
const studentArray = [
    {
        id: 1,
        name: "Aarav",
        skills: ["HTML", "CSS", "JavaScript"],
        details: {
            age: 24,
            city: "Visakhapatnam",
            isActive: true,
        },
        scores: [85, 90, 92],
    },
    {
        id: 2,
        name: "Sneha",
        skills: ["Python", "SQL"],
        details: {
            age: 27,
            city: "Hyderabad",
            isActive: false,
        },
        scores: [78, 82, 88],
    },
    {
        id: 3,
        name: "Rahul",
        skills: ["React", "JavaScript", "Git"],
        details: {
            age: 22,
            city: "Bengaluru",
            isActive: true,
        },
        scores: [95, 89, 94],
    },
]
console.log(studentArray)
console.log(studentArray[2].scores[2])
console.log(studentArray[1].details.isActive)
console.log(studentArray[0].skills[2])

// functions
function showName() {
    let studentName = "Manikanta"
    console.log(studentName)
}
showName()

// using parameters
const platform = "CodeHub"
function getStudentDetails(studentName, studentScore, isCompleted) {
    let summary = `Student ${studentName} scored ${studentScore} on ${platform}. Completed: ${isCompleted}`
    return summary
}
const result = getStudentDetails("Manikanta", 95, true)
console.log(result)

// date
const currentDate = new Date()
console.log(currentDate)

// RegExp
const pattern = /hello/i
console.log(pattern)
