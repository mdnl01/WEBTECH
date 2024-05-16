
let btn = document.getElementById("clickbtn");
btn.addEventListener("click",print);

let removebtn = document.getElementById("removebtn");
removebtn.addEventListener("click",remove)

function print()
{
    console.log("Hello");
}


function remove()
{
btn.removeEventListener("click",print)
}