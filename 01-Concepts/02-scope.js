var num1=10 //Global Scope
function fun(){
    var num2=15 //Local Scope
    if(num1===10){
        var num3=20 //Block Scope
        console.log("num3 = ", num3)
        console.log("num1+num2 = ", num1+num2)
    }
    console.log("num2 = ", num2)
}
fun()
console.log("num1 = ", num1)
