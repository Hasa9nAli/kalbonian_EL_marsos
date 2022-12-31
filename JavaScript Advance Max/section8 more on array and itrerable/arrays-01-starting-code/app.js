const numbers = [1, 2, 3];
console.log(numbers);

let moreNumbers = Array(5); // will create the empty array with size 5
moreNumbers = Array(5, 10); // will create an array [5, 10]
moreNumbers = new Array(10); // will create the empty array with size 10
moreNumbers = new Array(10, 11); // will create an array with [10, 11 value]

let yetMoreNumbers = Array.of(1, 2); // [1, 2 ]

yetMoreNumbers = Array.from("yetMoreNumbers"); // will split an array
console.log(yetMoreNumbers);

const listItems = document.querySelectorAll("li");
console.log(Array.from(listItems));

const hobbies = ["sports", "cooking"];
hobbies.push("reading");
hobbies.unshift("coding");
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);
hobbies.splice(0, 0, "Good Food");
console.log(hobbies);
let months = ["January", "February", "March", "April", "May", "June"];
months.splice(months.length, 0, "ggg");

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log("Your Code Here"); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log("Your Code Here"); // ["Ahmed", "Elham", "Osama"];
undefined;
myFriends.pop();
myFriends;
myFriends.splice(myFriends.length, 1);
myFriends;
myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
myFriends.splice(myFriends.length, 1);
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

console.log(friends); // ["Eman", "Osama"]
friends.splice(2, 2);
let value = [1, 2, 3, 4, 5, 6];
console.log(value.find((element) => element > 5));

const testResult = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
console.log(testResult.includes(10.99));

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjustPrices: price * (1 + tax) };
  return priceObj;
});

// for(const price of prices){
//     taxAdjustPrices.push(price *(1 + tax));
// }

// prices.forEach((price, idx, prices)=>{
// const priceObj = {index : idx, taxAdjustPrices : price * (1 + tax) }
// taxAdjustPrices.push(priceObj)
// })
console.log(taxAdjustPrices);
// #F00 #Ff0 #0ff #000 #00f #0f0 #f0f #ffF
// is not correct is sorted as #F00 string only First character is compared by default, hance it's not "10" > "3" but "1" < "3" and
//const sortedPrice = prices.sort();

// sorting acending  and decending 
const sortedPrice = prices.sort((a, b) => {
  if (a > b) return 1;
  else if (a === b) return 0;
  else return -1;
});

console.log(sortedPrice);
console.log(sortedPrice.reverse());


