let random = Math.random();
console.log(random);
let first,second,third;

if(random < 0.33){
    first = "Crazy";
}
else if(random >= 0.33 && random < 0.66){
    first = "Amazing";
}
else{
    first = "Fire";
}

if(random < 0.33){
    second = "Engine";
}
else if(random >= 0.33 && random < 0.66){
    second = "Food";
}
else{
    second = "Garments";
}

if(random < 0.33){
    third = "Bros";
}
else if(random >= 0.33 && random < 0.66){
    third = "Limited";
}
else{
    third = "Hub";
}

console.log(`${first} ${second} ${third}`);