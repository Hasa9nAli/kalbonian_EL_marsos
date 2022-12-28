const task1 = document.getElementById("task-1"); 
task1.style.backgroundColor = "black" ; 
task1.style.color = "white"; 
const head = document.title ; 
// this is first way 
// document.title = "Assignment - Solved!" ;
const title = document.querySelector("title");
console.dir(title)
title.textContent = "Assignment - Solved!";
const h1 = document.querySelector("h1"); 
h1.textContent = "solved"