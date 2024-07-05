// let boxes = document.getElementsByClassName("box");
// console.log(boxes);
// boxes[2].style.backgroundColor = "red";   //it wiil not work if we will insert a new box the indexing will change

document.getElementById("red").style.backgroundColor = "red";
document.querySelector(".box").style.backgroundColor = "green"; //it will select the first maching class "box" and it is css function

document.querySelectorAll(".box").forEach(e =>{  //queryselector all store the elements in an array form
    e.style.backgroundColor = "yellow";
})

e = document.getElementsByTagName("div");
console.log(e);