/* 
this is bad practice 
// const button = document.querySelector("button");

// const buttonClickHandler = () => {
//   alert("button was clicked!");
// };
// button.onclick = buttonClickHandler;
// const div = document.querySelector("div");
// create new button 
// const anotherButton = document.createElement("button");
// anotherButton.textContent = "Another Button Content"; 
// anotherButton.style.marginTop = "10px";
// div.append(anotherButton);

// const EventHappenWhenClickedToAnotherButton = ()=>{
//     console.log("another button is work 😎")
// }
*/
const anotherButton = document.createElement("button");
anotherButton.textContent = "Another Button Content"; 
anotherButton.style.marginTop = "10px";
const button = document.querySelector("button");
const div = document.querySelector("div");
div.append(anotherButton);

const buttonClickHandler = () => {
    alert("button was clicked!");
  };
const eventHappenWhenClickedToAnotherButton = event=>{
    console.log("another button is work 😎")
    console.log(event) // this the object have all event 
//    event.target.disabled = true; // make button not work 
}
const buttons = document.querySelectorAll("button");

buttons.forEach((btn)=>{ // btn is the element of array ... 
    console.log("Button CLICKED")

    btn.addEventListener("mouseenter", eventHappenWhenClickedToAnotherButton)
})

// window.addEventListener("scroll", (event)=>{console.log(event)})

const form = document.querySelector("form");
form.addEventListener("submit", (event)=>{
    event.stopPropagation();

    event.preventDefault(); // prevent submit make the page is not reload because the request server 
    console.log(event) ;
})

// let curElementNumber = 0;
 
// function scrollHandler() {
//     const distanceToBottom = document.body.getBoundingClientRect().bottom;
 
//     if (distanceToBottom < document.documentElement.clientHeight + 150) {
//         const newDataElement = document.createElement('div');
//         curElementNumber++;
//         newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
//         document.body.append(newDataElement);
//     }
// }
// window.addEventListener('scroll', scrollHandler);
 
div.addEventListener("click", (event)=>{
    event.stopPropagation();
    console.log("DIV CLICKED")
    console.log(event)});

const submitBtn = document.querySelector(".submit-btn")

submitBtn = submitBtn.addEventListener("click",()=>{



    
})

// button.addEventListener("contextmenu", buttonClickHandler)
// anotherButton.addEventListener("click", eventHappenWhenClickedToAnotherButton )
/*
setTimeout(()=>{
anotherButton.removeEventListener('click', eventHappenWhenClickedToAnotherButton)
}, 2000)// after 2000ms play this function
*/ 
// if we use the anonymous function is not removed because they are not same because the reference 
/* () => {
    alert("button was clicked!");==============>
  }; === () => {===============================>       is not same not Equal 
    alert("button was clicked!");==============>
  };  
*/

// if used _____bind()____ also not work we should save it in a (const) to make this have same address 
// `

// dblclcik => for double click 
// contextmenu => for right click 
  
// `


// button.addEventListener("dblclick", alert("")) => for double click 
