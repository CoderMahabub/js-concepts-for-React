// TODO:ES6 Related 7 things you must know TODO:

/* const numbers = [89, 35, 98, 12];
const student = {
  name: "Sakib Al Hasan",
  age: 32,
  matchesWith: ["NZ", "IND", "PAK", "SA", "WI"],
  firstCentury: {
    centuryAgainst: "NZ",
    totalBalls: 100,
    partshipWith: {
      first: "Mashrafee",
      second: "Musfiqur Rahim",
    },
  },
}; */

// TODO:01. Template String
/* const about = `My Name is: ${student.name}. Total Played: ${numbers[2]} and his first cetury against: ${student.firstCentury.centuryAgainst}`;
console.log(about); */

// TODO:02. Spread Operator
/* const numbers = [89, 35, 98, 12];

const newNumbers = [...numbers];

numbers.push(99);
numbers.push(89);

//create a new array from an older array and add an element
const currentNumbers = [...numbers, 555];
console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers); */

// TODO: 3.1 শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৯ রিটার্ন করবে।
/* const fiftyFive = () => 55;
console.log(fiftyFive()); */

// TODO:3.2 এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ১২ দিয়ে গুণ করে গুণফল রিটার্ন করবে।
/* const addSixyFive = (num) => num + 65;
console.log(addSixyFive(10)); */

// TODO:3.2 isEVen
/* const isEven = (x) => x % 2 == 0;
console.log(isEven(10)); */

// TODO:3.3 দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে চার দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।
/* const addDivided = (para1, para2) => (para1 + para2) / 4;
console.log(addDivided(20, 20)); */

// TODO:3.4 একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৫ যোগ করবে তারপর যোগফল দুইটাকে আবার গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।
/* const addMultiply = (param1, param2) => {
  const firstAdd = param1 + 5;
  const secondAdd = param2 + 5;
  const multiply = firstAdd + secondAdd;
  return multiply;
};
console.log(addMultiply(20, 10)); */

// TODO:04.৪. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
/* const student = {
  name: "Sakib Al Hasan",
  age: 32,
  matchesWith: ["NZ", "IND", "PAK", "SA", "WI"],
  firstCentury: {
    centuryAgainst: "NZ",
    totalBalls: 100,
    partshipWith: {
      first: "Mashrafee",
      second: "Musfiqur Rahim",
    },
  },
};
const  */
