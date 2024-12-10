//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring
//var
var x = 35
if (true) {
    var x =40
    console.log(x);//40
    
}
console.log(x); //40

//const
const z = 50
console.log(z); //50
//عددی به غیر از 50 ارور میده چون کانست ری اساین نمیشه 

//let
let y =30
if (true) {
    let y = 25
    console.log(y); //25 
}
console.log(y); //30

