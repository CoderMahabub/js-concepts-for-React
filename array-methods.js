// TODO: আরো পাঁচটা জিনিস জানতে হবে। ১.১ অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা ২ দিয়ে গুণ করে গুণফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
// ১.২. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।

const products = [
  { name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { name: "phone", price: 7000, brand: "iphone", color: "golden" },
  { name: "watch", price: 3000, brand: "caio", color: "yellow" },
  { name: "sunglass", price: 300, brand: "ribon", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "green" },
];
const brands = products.map((product) => product.brand); //map()
const prices = products.map((product) => product.price); //map()
const colors = products.map((product) => product.color); //map()
// console.log(brands, prices, colors);
products.forEach((product) => console.log(product)); //forEach single product
products.forEach((product) => console.log(product.color)); //forEach for single property of products

//Filter():
const cheap = products.filter((product) => product.price <= 5000);
// console.log(cheap);
const specificName = products.filter((product) => product.name.includes("n"));
// console.log(specificName);

//Find():
const special = products.find((product) => product.name.includes("n"));
console.log(special);
