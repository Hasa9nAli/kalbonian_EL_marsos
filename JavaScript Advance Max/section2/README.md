# Variable 
* is "data container" / "data storage"
* the value can be change 
* Example 
==> let userName = "Hasan" ; ✅ 
    userName = "Hello" ; ✅ 
# constant 
* is "data container" / "data storage"
* the value can't be change 
* Example 
==> const userName = "Hasan" ; ✅ 
    userName = "Hello" ; ❌
# Variable Naming
* Allowed ✅ 
 - let userName ; ✅ => camelCase
 - let ageGroup5  ; ✅ => only letters and digits 
 - let #kindOfSpecial ✅ =>> starting wit $ is allowed
 - let _internalValue ✅  => start with _ is allowed 
* Not Allowed / Not Recommended
 - let user_name ;❌ => allowed but bad practice ! 
 - let 21Players ; ❌ => starting with digits not allowed 
 - let user-b; ❌ => not special characters 
 - let let ;❌ => Keywords not allowed
# Data Type 
    * Number  =>2 ,-3,22 , 900 ==>[important for calculations and cod where you need to work with a number ]
    * String(Text) => "Hasan" , "software" , "computer" ==>
    * boolean => true , false 
# Function 
 - the syntax of function 
 * part 1 Define function 
    - function nameOfFunction (parameters[optional]){\n
    - //body 
    - }
* part 2 Call function 
    - nameOfFunction(); 