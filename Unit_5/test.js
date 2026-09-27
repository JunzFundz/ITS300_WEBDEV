// let name = "Junz";
// name = true
// console.log(name)
// name = 12
// console.log(name)

let a = "9"
let b = 9
//ternary operation
// console.log(a === b || !b != 10 ? true : false)


// if (username == password) {
//     if (email === "" && token == "" && session === "") {
//         console.log("Success")
//     }
//     console.log("Error")
// } else {
//     console.log("False")
// }

let number1 = 23;
let number2 = 50

let operators = "/";

switch (operators) {
    case "*":
        console.log(number1 * number2);
        break;
    case "-":
        console.log(number1 - number2);
        break;

    case "+":
        console.log(number1 + number2);
        break;
    case "/":
        console.log(number1 / number2);
        break;
    default:
        console.log("Error");
}

let limit = 1000
for (let i = 1; i <= limit; i++) {
    console.log("Sorry love", i)
}

outputText()


let result;
let ab = 10;
let bb = 20;

//Function
function outputText() {
    console.log(ab * bb)
}

//Function expression
const add = function () {
    console.log(ab * bb)
}

//Arrow function
const functionArrow = () => {
    console.log(ab * bb);
}
