/* // TODO: Truthy Values Are: 'Almas', 5, true, {}, []
// TODO: Falsy Values Are: '',0,false,null, undefined

//Check Truthy
let myVar = 5;
// Check any Truthy
if (myVar) {
  myVar = myVar * 100;
} else {
  myVar = 0;
}

// Check Falsy anything or negative
let myMoney = 50;
if (!myMoney) {
}

const money = 800;
let food;
if (money > 100) {
  food = "biriyani";
} else {
  food = "Cha Biscuit";
}

// TODO:02. ternary অপারেটর কি। এইটা দিয়ে শর্টকার্টে কিভাবে if-else লিখে
let food1 = money > 100 ? "Biriyani" : "Biscuit";
// console.log(food1);

let drink = money > 100 && myVar > 100 ? "Coke" : "Filter Water";
// console.log(drink);

// Number to String Conversion
const num1 = 52;
// console.log(num1);
const numStr = num1 + "";
// console.log(numStr);

// String to Number Conversion
const input = "80";
const inputNumber = +input;
// console.log(inputNumber); */

TODO:
let isActive =true;
const showUsers = () =>console.log('Display User');
const hideUsers = () =>console.log('Hide User');
// isActive ? showUser() : hideUser();

// use && if the left side is true then right side will be executed
isActive && showUsers();

// use || if the left side is false then right side will be executed
isActive|| hideUsers();

//toggle boolean
isActive =! isActive;
