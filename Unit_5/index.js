//Banking app
//Sending money

let session = "9";
let balance = 1020;

if(session !== 10){
    console.log("Please login")
}else{
    true
    console.log("Money sent : " , 500 , " balance is : " , balance - 500)
}

console.log(8 >= 2 ? "Yes" : "no")




const user = "123";
const pass = 123;
const token = "hjgh21";

if(!user && pass == 1234 || token == "hjgh21"){
    alert("logged in")
}else{
    alert("Please log in")
}


let number = 23;
let number2 = 50;

let operator = "+";

switch(operator){
    case "/":
        console.log(number / number2);
        break;
    case "*":
        console.log(number * number2);
        break;
    case "+":
        console.log(number + number2);
        break;
    default:
        console.log(Error);
}


function resultCalculation(){
    console.log(45 * 90)
}

const text = function(){
    console.log("The result is :")
}

const nameOutput = () =>{
    console.log("The result is :")
}

nameOutput