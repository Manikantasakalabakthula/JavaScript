// Var - it's vanished
console.log(firstName)

var firstName
console.log(firstName)

var firstName=null
console.log(firstName)

var firstName="Manikanta"
console.log(firstName)

firstName="Kowshik"
console.log(firstName)

var firstName="Prasad"
console.log(firstName)

// let
// console.log(secondName)  ReferenceError: Cannot access 'secondName' before initialization

let secondName="Sakalabakthula"
console.log(secondName)

secondName="Gokavarapu"
console.log(secondName)

// let secondName="Chennuru"
// console.log(secondName) SyntaxError: Identifier 'secondName' has already been declared

// const
// console.log(className) Uncaught ReferenceError: Cannot access 'className' before initialization

const className="HTML"
console.log(className)

// className="CSS" TypeError: Assignment to constant variable.
// console.log(className)

// const className="JavaScript" SyntaxError: Identifier 'className' has already been declared
// console.log(className)
