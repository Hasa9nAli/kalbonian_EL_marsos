class AgedPerson{
    printAge(){
        console.log(this.age)
    }
}

class Person extends AgedPerson{
  name = "Max";
  constructor() {
    super()
    this.age = 30;
    this.greet()
  }
  greet() {
    console.log(
      "Hi, I am " + this.name + "and i am " + this.age + " years old"
    );
  }
}

// function Person (){
//     this.age = 30 ; 
//     this.name = 'Max' ; 
//     this.greet = ()=>{
//         console.log(
//                   "Hi, I am " + this.name + "and i am " + this.age + " years old"
//                 )
//     };
// }
/* _________________that Error________________
const person = Person(); 
*/
const person = new Person();
person.greet()
// person.printAge()
console.log(person.__proto__)
console.log(String.prototype)
console.log(person.__proto__)
Person.prototype.printValue =     console.log("hello from prototype"); 

Person.printValue
 const p = new person.__proto__.constructor()
Person.describe = function (){
  console.log("Creating person...")
}
Person.describe()
console.log(p)
const age = new AgedPerson()
// age.greet()

const v1 = new Person()
const v2 = new Person(); 
console.log(v1.__proto__ === v2.__proto__)
