console.log("hello")

function back(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);

    return `rgb(${a} , ${b} , ${c})`;
}

function add(a,b){
    if(a=="" || b==""){
        alert("Please enter the data")
        return;
    }
    let html = `<div class="card">
                    <h3>${a}</h3>
                    <p>${b}</p>
                </div>`
    let div = document.createElement("div");
    div.innerHTML = html;
    document.querySelector(".list").prepend(div);
}

setInterval(() => {
    document.body.style.backgroundColor = back();
}, 1000);

document.querySelector(".btn").addEventListener("click",()=>{
    let a = prompt("Enter the name");
    let b = prompt("Enter the description");
    console.log(a);
    console.log(b);
    add(a,b);
})


