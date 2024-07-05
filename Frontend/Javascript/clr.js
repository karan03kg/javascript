function random(){
    let x = Math.floor(Math.random()*256);
    let y = Math.floor(Math.random()*256);
    let z = Math.floor(Math.random()*256);

    return `rgb(${x} , ${y} , ${z})`
}

// let b = random(); 
// let c = random()
console.log(random());

let a = document.getElementsByClassName("box");
console.log(a);
Array.from(a).forEach(e =>{
    e.style.backgroundColor = random() ;
    e.style.color = random() ;
})