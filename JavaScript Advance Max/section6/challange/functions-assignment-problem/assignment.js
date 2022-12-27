sayHello1 = (name) => console.log("Hi " + name);
sayHello2 = (phases, name) => console.log(phases + " " + name);
sayHello3 = () => console.log("Hi there");
sayHello4 = (name) => "Hi " + name;

sayHello1("Hasan");
sayHello2("Hi", "Mohammed");
sayHello3();
console.log(sayHello4("ALi"));
sayHello5 = (name, phases = "Hello ") => console.log(phases + " " + name);
sayHello5("Man");

const checkInput = (fun, ...args)=>{
  let hasEmpty = false ; 
  for(const text of args) {
    if(!text){
      hasEmpty = true; 
      break ; 
    }
  }
  if(!hasEmpty){
    fun(); 
  }
}
checkInput(()=>{console.log("no empty")}, 1,2,3,4,5)