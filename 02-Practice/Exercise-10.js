// Write your JavaScript here
let fruitName = "Apple" //Golbally Accessible
function nature() {
    let vegName = "Potato" //Functionally Accessible
    {
        let foodName = "Biriyani"
        console.log(foodName) //Block Accessible
    }
    console.log(vegName)
}
nature()
console.log(fruitName)
