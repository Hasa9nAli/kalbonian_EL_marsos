// will print undefined
console.log(userName);
var userName = "Max";

// will be __ERROR__
// error => Cannot access 'name' before initialization
// console.log(name);
// let name = "Max";
// redeclare is available
var x = 10;
var x = 15;
// will print 15
console.log(x);
//__________ IMPORTANT NOTE _____________
// will printed __ but but but __ infeasible will add var
//___________ FOCUS __________________________
// avoid this way because when you read code you think you declare of this var in above or other script and this cost many time
// اذا اضفنا use strict  
//  هذه الطريقة ماغاح تشتغل 
// بدون يوس ستركت غاح تشتغل ويعتبرها var

("use strict"); // make the code is more cleaner 
hasan = "hello world";
//___________________________________________
console.log(hasan);

// redeclare is not available
// that error
// let y = 10 ;
// let y = 20 ;

