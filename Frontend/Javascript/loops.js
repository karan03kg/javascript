let a=10;  //for normal iterations
for(let i=0;i<a;i++){
    console.log(i);
}

let obj = {
    name : "Karan",
    age : 20,
    role : "programmer"
}

for(const key in obj){  //For the object traversal
    const element = obj[key];
    console.log(key,element);
}

for(const c of "hello"){  //For the string and array traversal
    console.log(c);
}

let arr = [1,2,4,65,5];
arr.forEach((value,index,a) => {   //For the iteration in array
    console.log(value,index,a);
});

let new_arr = arr.map(e =>{
    return e;
})
console.log(new_arr);

const greaterthanfive = (e)=>{
    if(e>5){
        return true;
    }
    return false;
}
console.log(arr.filter(greaterthanfive));

let arr1 = [1,2,3,4,5];

const factorial = (a,b) =>{
    return a*b;
}
console.log(arr1.reduce(factorial));
let i=0;
while(i<6){
    console.log(i);
    i++;
}