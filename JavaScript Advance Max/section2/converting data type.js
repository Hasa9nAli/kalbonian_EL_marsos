const defaultResult = 0 ;
let userInput = "20" ; 
let currentResult = defaultResult;  
function add(){
    // two plus is convert string to int without function
    currentResult = currentResult + + userInput ; 
    // parseInt is convert string to int with function
    currentResult = currentResult + parseInt(userInput);
    //toString convert number to string 
    currentResult = currentResult.toString() + parseInt(userInput);


}