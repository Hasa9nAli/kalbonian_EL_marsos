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
    * Object => {key:value }  =>{name:'Max', age:31}==>[important for grouped / related data, helps you with organizing data]
    * Array => [1, 3, 5] ==>[important for list data, unknown amount of data ]
# Function 
 - the syntax of function 
 * part 1 Define function 
    - function nameOfFunction (parameters[optional]){\n
    - //body 
    - }
* part 2 Call function 
    - nameOfFunction(); 

* Mixing Numbers & Strings
- You saw the example with a number and a "text number" being added

        - 3 + '3' => '33'

        - in JavaScript.

        - That happens because the + operator also supports strings (for string concatenation).

        - It's the only arithmetic operator that supports strings though. For example, this will not work:

        - 'hi' - 'i' => NaN

        - NaN is covered a little later, the core takeaway is that you can't generate a string of 'h' with the above - code. Only + supports both strings and numbers.

        - Thankfully, JavaScript is pretty smart and therefore is actually able to handle this code:

        - 3 * '3' => 9

        - Please note: It yields the number (!) 9, NOT a string '9'!

        - Similarly, these operations also all work:

        - 3 - '3' => 0

        - 3 / '3' => 1

        - Just 3 + '3' yields '33' because here JavaScript uses the "I can combine text" mode of the + operator and - generates a string instead of a number.