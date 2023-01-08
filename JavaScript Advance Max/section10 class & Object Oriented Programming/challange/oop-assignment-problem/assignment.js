class Course {
    _price
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this._price = price;
  }
  calculate() {
    return this.length / this._price;
  }
  summary() {
    console.log(`
        title : ${this.title}
        price : ${this._price}
        length : ${this.length}
        description : for JavaScript 
        `);
  }
}
class PracticalCourse extends Course {
    constructor(title, length, price, numOfExercises){
    super(title, length, price)
    this.numOfExercises = numOfExercises
    }
    get prices() {
        return `${+this._price}$`; 
    }
    set prices(price) {

        this.price = Math.abs(price);
    }
}
class TheoreticalCourse extends Course{
    constructor(title, length, price){
        super(title, length, price)}
    publish(){
        console.log(`something ...`)
    }
}

const x = new PracticalCourse("JavaScript Crush course",900, 400,'num');
console.log(x.calculate()); 
console.log(x.numOfExercises)
x.summary()
console.log(x.prices)
x.prices =  10 ; 
console.log(x.prices)