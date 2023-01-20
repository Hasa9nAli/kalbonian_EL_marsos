const main = document.querySelector("body") ; 
main.style.width = "4000px"
main.style.height = "4000px"
const box = document.getElementById("main-box");
 
box.style.top = "200px";
box.style.left = "200px"
function increse() {
    "use strict"
    //  document.body.scrollTop  -> this removed and replaced by document.documentElement.scrollTop 
    document.documentElement.scrollTop +=100
    console.log(document.documentElement.scrollTop )
}

box.addEventListener('click',increse)
