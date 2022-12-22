# "Boolean Tricks" with Logical Operator
 * Boolean coercion via double NOT (double bang) operator == <h3>!!</h3> ==> e.g. !!"", e.g !!1 ==> return true or false
 * Default value assignment via OR operator <h3>||</h3> ==> e.g const name = someInput || 'Max'=>return someInput if not falsy 'Max' otherwise
 * Use value if condition is true via AND operator <h3>&&</h3> ==> e.g const name = isLoggedIn && 'Max' ==> 'Max' is set if isLoggedIn is true false otherwise
### Example 
    - const userInput  = "" ; 
    -// this will return false  
    - const isValidInput = !!userInput
    -// will return 'Max' because userInput is falsy 
    -const userName = userInput || 'Max' 

    -const realUserInput = 'Menu';
    -// will return 'Menu' because the realUserInput -is truthy 
    -const realUserName = realUserInput || 'Max'; 
    -const isLoggedIn = true ; 
    -// will return ['Books'] Because isLoggedIn is true
    -const shoppingCart = isLoggedIn && ['Books]
    -isLoggedIn = false ; 
    - // will return false 
    - isLoggedIn && ['Books'];
    - null && ['Books']=> will return null  
