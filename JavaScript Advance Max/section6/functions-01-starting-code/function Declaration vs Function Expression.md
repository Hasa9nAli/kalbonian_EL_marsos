# Function Declaration / Function Statement 
<p>
    function multiply(a, b){
        return a * b ; 
    }
</p>
<p>
Hoisted to to, can be declared anywhere in the file (also after it's used)
</p>

# Function Expression
<p>
    const multiply = function(a, b){
        return a * b ; 
    }
</p>
<p>
Hoisted to top but not initialized / defined can't be declared anywhere in the file (i.e. not after it's used)
</p>