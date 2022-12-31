const arr = [1, 2, 3, 4, 5 ,8, 30, 99]

console.log(arr.filter(element =>{
    return element > 5 ; 
}))
console.log(arr.map(element =>{
    return element
}))
const obj = {}
console.log(arr.map(element =>{
    obj.element = element; 
    return obj ;
}))

console.log(arr.reduce((a, b) =>a * b ))
