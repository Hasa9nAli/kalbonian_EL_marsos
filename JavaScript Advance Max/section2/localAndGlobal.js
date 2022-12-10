// this is Global variable 
let result = 10 ; 
function add(num1, num2){
    // thee global variable will be changed where function is called 
    result = num1 + num2 ; 
    return ; 
}
add(10, 20);
console.log(result); // 30 
result = 500 ; 
console.log(result); // 500 

let value = 50 ; 

function sub(num1, num2){
    // the global variable will not changed where the function is called
    // function scope 
    let value = num1 + num2 ; 
    return value ;  
}
sub(50 , 30);
console.log(`the value out function scope ${value}`) // will print 50 

if(value){
    // this is block scope 
    let x = 10 ;     
}
