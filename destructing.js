// TODO:04. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];
const [x, y] = numbers;
// console.log(x, y);

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}
// const [first, second] = [90, 34];
const [first, second] = boxify(90, 34);
// console.log(boxify(90, 34));

// Complecated
const player = {
  name: "Sakib Al Hasan",
  age: 32,
  matchesWith: ["NZ", "IND", "PAK", "SA", "WI"],
  firstCentury: {
    centuryAgainst: "NZ",
    totalBalls: 100,
    partshipWith: {
      first: "Mashrafee",
      fifth: "Musfiqur Rahim",
    },
  },
};
// const [firstMatch, secondMatch] = ["NZ", "IND"];
const [firstMatch, secondMatch] = player?.matchesWith;

// TODO:05.shorthand দিয়ে অবজেক্ট কিভাবে ডিক্লেয়ার করে। {a , b } স্টাইলে।
// Object Destructuring
// const { name, age } = { name: "alu", age: 14 };
// const { name, id, age } = { id: 127, name: "alu", age: 14 };

const { centuryAgainst, totalBalls } = player.firstCentury;
// TODO: অপশনাল চেইনিং কি জিনিস। সেটা কখন কিভাবে ইউজ করে। না জানলে গুগলে সার্চ দাও
const { fifth } = player?.firstCentury?.partshipWith;
console.log(fifth);
