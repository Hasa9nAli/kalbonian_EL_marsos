const ids = new Set(
  // must be iterable
  ["Hi", "From", "set!"]
);
console.log(ids[0]); // will return undefined
ids.add(55);
// will remove 55 ;
ids.delete(55);
// not exist will be ignore that
ids.delete("h");
for (const entry of ids.entries()) console.log(entry);
console.log(ids.has("Hi"));

let myData = [1, 1, 1, 2, 3];
let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
myUniqueData.add(1);
console.log(myData);
console.log(myUniqueData);
// will return the length of set is property not method

console.log(myUniqueData.size);
console.log(myUniqueData);
console.log(myUniqueData.delete(2)); // will return the true because the
console.log(myUniqueData);
console.log(myUniqueData.size);
// مسح كل شي
myUniqueData.clear();
console.log(myUniqueData);
console.log(myUniqueData.size);
// has best performance from includes
console.log(myUniqueData.has(1));

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
console.log(mySet);

let iterator = mySet.keys();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

// working with WeakSet
// __ERROR__ Invalid value used in weak set
// let myWeakSet = new WeakSet([1, 1, 1, 2, 3, "A", "A"])

let myWeakSet = new WeakSet([{ A: 1, B: 2 }]);
//show the reamMe is very useful
console.log(myWeakSet);
//_____________________________________________________________________________
// Starting with Map Vs Object

let myObject = {};
// not have property
let myEmptyObject = Object.create(null);
let myMap = new Map();
console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

// سوف يعتبرهم واحد ولايمكنك الوصول عليهم ثنينهم 
let myNewObject = {
  10: "Number",
  "10": "String",
};
console.log(myNewObject[10]);
console.log("##########################")
let myNewMap = new Map();
// set (key, Value ) 
myNewMap.set(10, "Number")
myNewMap.set("10", "String")
myNewMap.set(true, "boolean")
myNewMap.set({a: 1 , b: 2}, "Object")
myNewMap.set(function doSomething(){return 1 }, "Function")
 
// get(key)
// وصلهم بشكل عادي كلش
// غاح تجيبم مرتبين حسب ماجا 
console.log(myNewMap.get(10))
console.log(myNewMap.get("10"))
console.log(myMap.get({a: 1 , b: 2}))
console.log(myMap.get(1))
console.log("##########################")
console.log(myNewMap)
for(const element of myNewMap.keys())
    console.log(myNewMap.get(element))
//*********************************** */
const person1 = {name: 'Max'};
const person2 = {name: 'Manuel'}; 

const personData = new Map([[person1, [{date:'yesterday', price : 100}]]])
personData.set(person2, [{date:'tow weeks ago', price: 100}])
console.log(personData)
console.log(personData.get(person1))
for(const entry of personData.entries()){
  console.log(entry)
}
console.log("****************************")

for (const [key, value] of personData.entries()){
  console.log(key , value)
}
console.log("****************************")
for (const key of personData.keys()){
  console.log(key)
}

