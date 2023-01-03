const movieList = document.getElementById('movie-list'); 

const userChosenKeyName = 'level' ;; 

let person = {
  "first name": "Max",
  [userChosenKeyName] : '...',
  age: 30,
  hobbies: ["Sports", "Cooking"],
  greet: function () {
    alert("Hi There");
  },
  1.5 : "OK",
};
console.log(person['level'])
person.greet();
// ................
// Adding , Modifying  & Deleting  Properties

/*
person = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    greet: function () {
        alert("Hi There");
    },
    //  isAdmin: true,
};
*/ 
// Adding
person.isAdmin = true;
// Modifying 
person.age = 31 ;
// Deleting
delete person.age; 
console.log(person);
console.log(person["first name"]) ; 
console.log(person["isAdmin"]);
console.log(person["1.5"])
console.log(person[1.5])
const keyName = "first name" ; 
console.log(person[keyName])
const nnn = 'value'
person.nnn = 10 ; 
// undefined 
console.log(person[nnn])