// ! Time Object

let interval;
let timer=document.getElementsByClassName("display");
let timermili=document.getElementsByClassName("displaymili");
// console.log(timer)
let date= new Date();
// console.log(date.getMilliseconds());

function start(){
    let count=0;
    let countmili=0;
    interval=setInterval(() => {
        ++count;
        timer[0].innerHTML=count;
    }, 1000);

    intervalmili=setInterval(() => {
        countmili++;
        timermili[0].innerHTML=(countmili % 100);
        // timermili[0].innerHTML=date.getMilliseconds();
    },10);
}

function stop() {
    clearInterval(interval);
    clearInterval(intervalmili)
    timer[0].innerHTML="0";
    timermili[0].innerHTML="00";
}

// let date= new Date();
// console.log(date.getMilliseconds());