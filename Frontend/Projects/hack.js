let arr =["Initializing hacking","Reading your files","Password files detected","Sendng all password and personal files to server","Cleaning up"];

function solve(){

    let random = 1 + 6*Math.random();
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve();
        }, 1000*random);
    })
}

async function main(){

    let t = setInterval(() => {
        let last = document.body.lastElementChild;

        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3);
        }
        else{
            last.innerHTML = last.innerHTML + ".";
        }
    }, 700);
    async function getitem(item){
        await(solve());
        let div = document.createElement("div");
        div.innerHTML = item;
        document.body.append(div);
    }

    for(const item of arr){
        await getitem(item);
    }

    await solve();
    clearInterval(t);
}
main();