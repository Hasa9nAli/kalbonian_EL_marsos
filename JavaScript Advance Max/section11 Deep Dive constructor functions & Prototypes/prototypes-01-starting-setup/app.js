// class Person {
//   name = "Max";
//   constructor() {
//     this.age = 30;
//   }
//   greet() {
//     console.log(
//       "Hi, I am " + this.name + "and i am " + this.age + " years old"
//     );
//   }
// }

function Person (){
    this.age = 30 ; 
    this.name = 'Max' ; 
    this.greet = ()=>{
        console.log(
                  "Hi, I am " + this.name + "and i am " + this.age + " years old"
                )
    };
}
/* _________________that Error________________
const person = Person(); 
*/
const person = new Person();
person.greet()
