let bttn = document.getElementById("btn");
let imgg=document.getElementById("imgtag");
// console.log(imgg)
// console.log(bttn)

function hide(){
    imgg.classList.toggle("hidden");
    if(bttn.innerHTML=="VISIBLE"){
        bttn.innerHTML="HIDDEN";
    }
    else{
        bttn.innerHTML="VISIBLE";
    }
}

console.log(document.querySelectorAll("#imgtag,#btn"));

