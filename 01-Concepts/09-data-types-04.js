// data types
// non-primitive data types
// functions
function myName(){
    let myName="Manikanta"
    console.log(myName)
}
myName()

// using parameters
const platform="CodeHub"
function getStudentDetails(studentName, studentScore, isCompleted){
    let summary=`Student ${studentName} scored ${studentScore} on ${platform}. Completed: ${isCompleted}`
    return summary
}
const result=getStudentDetails("Manikanta", 95, true)
console.log(result)

// date
const currentDate= new Date()
console.log(currentDate)

// RegExp
const pattern=/hello/i
console.log(pattern)
