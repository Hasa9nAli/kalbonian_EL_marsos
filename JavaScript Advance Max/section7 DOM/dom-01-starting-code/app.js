const h1 = document.getElementById("main-title");
h1.textContent = "Some new title!";
h1.style.color = "white";
h1.style.backgroundColor = "black";
const li = document.querySelector("li:last-of-type");
// li.textContent = li.textContent + " (Changed!)";
// li.parentElement // => will return the <ul>...</ul>
// li.parentNode // => also 
// document.documentElement.parentElement //=> will return null
// document.documentElement.parentNode // => will return document have all html content with all parent and children 
// document.body.firstElementChild.nextElementSibling // =>will return ul 
// document.body.firstElementChild.nextElementSibling.firstElementChild // will return <li></li> 
const body = document.body ; 


const listItemElements = document.getElementsByTagName("li");

for (const listItemEl of listItemElements) {
  console.log(listItemEl);
}

const ul = document.querySelector("ul");
// insert the element 
// write insertAdjacentHTML mdn 
ul.insertAdjacentHTML("beforeend","<li>Hasan Here</li>")
// ul.children // =>   will return array with all children elements
// ul.firstChild // => will return text
// ul.firstElementChild // => will return the first element
// ul.lastChild // => will return the last text
// ul.lastElementChild // => will return the last element
// ul.querySelector("li:last-of-type") // => will return last element 
// ul.previousElementSibling // => will return previous element <header>…</header>
// ul.previousSibling // => will return #text 
// ul.nextElementSibling //=> <h2></h2> but if don't exist any element just body will return #f00 null 
const section = document.querySelector("section"); 
section.className = "red-bg" ;
const button = document.querySelector("button");
button.addEventListener("click",()=>{
  // section.classList.toggle('visible')
  section.classList.toggle('invisible')
} )

// nameElement.cloneNode() => make a clone(copy) from the element
// 