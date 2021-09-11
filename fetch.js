// TODO:04 JSON এর stringify এবং parse কখন কোনটা ইউজ করে
const student = {
  name: "Sakib",
  age: 32,
  movies: ["King Khan", "Dhakar Rustum"],
};

// console.log(student);
const studentJSON = JSON.stringify(student);
// console.log(studentJSON);
const studentObject = JSON.parse(studentJSON);
// console.log(studentObject);

// TODO: fetch
/* fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.JSON())
  .then((data) => console.log(data));
 */

//   TODO: Keys and Values
/* const keys = Object.keys(student);
console.log("Student Keys Are: ", keys);
const values = Object.values(student);
console.log("Student Values Are: ", values); */

// TODO: for
/* const numbers = [21, 42, 4233, 5, 5, 53, 53, 53, 3, 5];
numbers.forEach((number) => console.log(numbers)); // forEach = If we don't need return
numbers.map((number) => number * 5); // map  = If we need return value

// for of = Array Like Object
for (const number of numbers) {
  console.log(number);
}

// Loop on an object using for in
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
} */

// TODO: Add or remove from an array
const products = [
  { name: "laptop", price: 3200, brand: "len", color: "silver" },
  { name: "phone", price: 7000, brand: "HTC", color: "golden" },
  { name: "watch", price: 3000, brand: "caio", color: "yellow" },
  { name: "sunglass", price: 300, brand: "ray", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "green" },
];

const newProduct = { name: "webcam", price: 3200, brand: "lal", color: "red" };

//copy products of array and then add newProduct to it
const newProducts = [...products, newProduct];
console.log(newProducts);
console.log(products);

//Create a new array without one specific item
// remove laptop means create a new array without the laptop
const remaining = products.filter((product) => product.name !== "laptop");
console.log(remaining);
