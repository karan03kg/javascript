let a = 3;
let b = 5;
let c = "+";
let random = Math.random();
console.log(random);

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
if(random>0.1 && c == "+"){
    console.log(a+b);
}
else if(random>0.1 && c == "-"){
    console.log(a-b);
}
else if(random>0.1 && c == "*"){
    console.log(a*b);
}
else if(random>0.1 && c == "/"){
    console.log(a/b);
}
else{
    c=obj[c];
    let x = eval(`a ${c} b`);
    console.log(x);
}