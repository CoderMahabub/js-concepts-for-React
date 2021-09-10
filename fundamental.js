/* TODO:42-1 Six JavaScript Fundamentals that you need to know TODO: */

// TODO:01. How to declare a variable using let and const
/* const fatherName = "Arnold"; // As Father Name Doesn't Change
let season = "Rainy"; // As Season can be changed to summer
season = "Winter"; */

// TODO:02.1 Conditions
// 6 Basic Condition: >,<,===, !==, <=, >=
/* if (fatherName === "Arnold") {
  console.log("Yes, Arnold is Armold Father");
} else if (season === "Summer") {
  console.log("THis is summer season");
} else {
  console.log("Something Else");
} */

// TODO:02.2 Multiple Condition: &&, ||
/* if ((fatherName === "Arnold" && season === "Rainy") || season === "winter") {
  console.log("It is winter", season);
} else {
  console.log("Something Else");
} */

// TODO:03. Array , Array Index, Array Length, Array Push, Set by Index value,
const numbers = [89, 35, 98, 12];
/* 
console.log(numbers.length); //length
console.log(numbers.indexOf(98)); //indexOf()
numbers[3] = 100; // Change Value By indexOf()
// console.log(numbers);
numbers.push(200); // push()
// console.log(numbers);
numbers.pop(); // pop()
// console.log(numbers);
console.log(numbers.includes(35)); //includes() */

// TODO:04. loop: for || while
/* for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}
 */
/* let i = 0;
while (i < numbers.length) {
  const number = numbers[i];
  i++;
  console.log(number);
} */

// TODO: 5. Simple Function
/* function multiply(number, number1) {
  const result = number * number1;
  return result;
}
const output = multiply(5, 10);
console.log(output); */

// TODO:06. Object and Access object in all 3 ways
/* const student = {
  name: "Sakib Al Hasan",
  age: 32,
  matchesWith: ["NZ", "IND", "PAK", "SA", "WI"],
  firstCentury: {
    centuryAgainst: "New",
    totalBalls: 100,
    partshipWith: {
      first: "Mashrafee",
      second: "Musfiqur Rahim",
    },
  },
};
console.log("Name:", student.name, "Age:", student.age); //Direct By Property
console.log("Name:", student["name"], "Age:", student["age"]); // Access via Property name String
const myVariable = "age";
console.log(student[myVariable]); //Access via property in a variable */
