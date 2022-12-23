const randomNumber = Math.random(0,1); // produces random number between 0 (including) and 1 (excluding)
console.log(randomNumber, '\n--------------')
if (randomNumber > 0.7)
alert("the number is greater than 0.7 ");

const anArray = [1, 2, 3, 4, 5, 6];
for(let i =0 ; i < anArray.length ; i++) {
    console.log(anArray[i]);
}
for(const element of anArray) {
    console.log(element);
}
anArray.map(element => console.log(element));

// print with last element 
for (let i = anArray.length - 1; i >= 0; i--) {
    console.log(anArray[i]);
}
console.log('--------------------------')
const randomNumber2 = Math.random(0, 1)
console.log(randomNumber2)
if(randomNumber > 0.7 || randomNumber2 <= 0.2 )
    alert("done")