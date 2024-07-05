// function set_elements(time, name, channel, view, month){
//     document.getElementById("time").innerHTML = time;
//     document.getElementById("para").innerHTML = name;
//     document.getElementById("channel").innerHTML = channel;
//     document.getElementById("view").innerHTML = view;
//     document.getElementById("month").innerHTML = month;
// }

// let time = "6:13"
// let new_name = "Dynamic Website Builder | Sigma Web Development Course - Tutorial";
// let channel = "CodeWithHarry"
// let view = "723K"
// let month = "2 month ago"

// set_elements(time,new_name,channel,view,month);

function create_cart(time,name,channel,view,month){
let new_view;
if(view < 1000000){
    new_view = view/1000 + "K";
}
else if(view >= 1000000){
    new_view = view/1000000 + "M";
}
else{
    new_view = view/1000 + "K";
}
let html = `<div class="container">
<div class="imag">
    <h3 id="time">${time}</h3>
</div>
<div class="cont">
    <h2 id="para">${name}</h2>
    <div class="bottom">
        <p id="channel">${channel}</p>
        <div class="dot"></div>
        <p id="view">${new_view}views</p>
        <div class="dot"></div>
        <p id="month">${month} months ago</p>
    </div>

</div>
</div>`
document.querySelector(".container").innerHTML = html;
}

let time = "60:13"
let new_name = "Dynamic Website Builder | Sigma Web Development Course - Tutorial";
let channel = "CodeWithHarry"
let view = "100000000"
let month = "6"

create_cart(time,new_name,channel,view,month);