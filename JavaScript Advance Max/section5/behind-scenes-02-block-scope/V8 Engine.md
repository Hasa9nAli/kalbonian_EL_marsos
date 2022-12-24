# V8 Engine 
    * is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++
# but what does this actually mean? 
    * Well, actually it means, V8 is a C++ program, which receives JavaScript code, compiles, and executes it.
# V8 Does:
 * Compiles and executes JS code
 * Handling call stack — running your JS functions in some order
    #### The call stack
     * is mainly a list of function to execute, by calling order Every function which calls another function will be inserted one after the other directly
 * Managing memory allocation for objects — the memory heap
 * Garbage collection — of objects which are no longer in use
 * Provide all the data types, operators, objects and functions
 <img src = "C:\\Users\\lenovo\\OneDrive\\Desktop\\image.png">

# V8 Can:
  * Provide the event loop, but this is sometimes implemented by the browser as well

# V8 thread 
 * V8 is a single threaded execution engine. It’s built to run exactly one thread per JavaScript execution context. 
