// let name = 'Max' ;
//  function greet(){
//     let age = 30 ;
//     var name = 'Manuel'
//     console.log(name, age);
//  }
//  // wil print  Manuel  30
//  greet()
//  // that will print Max
//  console.log(name)
//  // that will be error because age is not defined
// //  console.log(name, age )
var name = "Max";
// that error because 'name' has already been declared
// let name = "hasan";
function greet() {
  var age = 30;
  var name = "Manuel";
  console.log(name, age);
}
// age is not define because we declare it in function scope not in block scope 
// console.log(age) ; 
if (name === 'Max'){
  // if print this var out the block scope will be printed
  var hobbies = ['Sports', 'Cooking']
  console.log(name  + '  ' + hobbies)
}
console.log(hobbies)
// wil print  Manuel  30
greet();
// that will print Max ['Sports', 'Cooking']
console.log(name, hobbies);
// that will be error because age is not defined
//  console.log(name, age )
/* 
there really is no use case where you would need var anymore, So why is var still in the language? 
well because of that browser support thing , you can't remove it because that would mean if chrome decides 
because that would mean if Chrome decides to not support the var keyword , that all scripts that still use var that will be 
stopped working 

*/  