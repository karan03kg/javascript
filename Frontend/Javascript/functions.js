function nice(name){
    console.log("hello "+ name);
    console.log("how are you " + name);
}

function sum(a,b){
    // console.log(a+b);
    return a+b;
}

const func1 = (x)=>{
    console.log(x);
}
nice("ram");
let result = sum(1,2);
console.log(result);

func1(34);
func1(41);