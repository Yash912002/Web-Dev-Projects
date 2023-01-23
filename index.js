const hourEl = document.getElementById("hour") 
const minEl = document.getElementById("minutes") 
const secEl = document.getElementById("seconds") 
const ampmEl = document.getElementById("ampm") 


function updateTime(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }

    h < 10? h = "0" + h : h;

    hourEl.innerText = h;
    minEl.innerText = m;
    secEl.innerText = s;
    ampmEl.innerText = ampm;

    setTimeout(()=>{
        updateTime()
    },1000)
}

updateTime();