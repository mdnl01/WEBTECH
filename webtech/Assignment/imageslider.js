imgarray = [
    "https://plus.unsplash.com/premium_photo-1682124752476-40db22034a58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1541562232579-512a21360020?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1lfGVufDB8fDB8fHww","https://images.unsplash.com/photo-1559981421-3e0c0d712e3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1lfGVufDB8fDB8fHww","https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFuaW1lfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1615463204303-c3c22bac1642?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhciUyMGJhY2tncm91bmRzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1523828446771-151afb8374f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1630686120389-20b035c86d7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhciUyMHBvcnRyYWl0fGVufDB8fDB8fHww"
]
// !USING MULTIPLE FUNCTIONS
// !CHANGE ONCLICK EVENTS IN HTML to next() and previous(), remove arguments.
// let largeimg = document.getElementById("largeimg");

// let count=0;
// function next(){
//     count++;
//     if(count==4){
//         count=0;
//     }
    
//     largeimg.src=imgarray[count];
// }

// function previous(){
//     count--;
//     if(count==-1){   
//         count=3;
//     }
//     largeimg.src=imgarray[count];
    
// }


//! USING SINGLE FUNCTION 

// let largeimg = document.getElementById("largeimg");

// let count=0;
// function button(clickevent){
//     // console.log(count);
//     if(clickevent=="right")
//     {
//         count++;
//         if(count==imgarray.length){
//             count=0;
//         }
        
//         largeimg.src=imgarray[count];
//     }
//     if(clickevent=="left")
//     {
//         count--;
//         if(count==-1){   
//             count=imgarray.length-1;
//         }
//         largeimg.src=imgarray[count];
//     }

// }

let largeimg = document.getElementById("largeimg");
let imgContainer = document.querySelector(".imgcontainer");
let count = 0;

function button(clickevent) {
    imgContainer.style.opacity = 0; // Set opacity to 0 for the fade-out effect

    setTimeout(() => {
        if (clickevent == "right") {
            count++;
            if (count == imgarray.length) {
                count = 0;
            }
            largeimg.src = imgarray[count];
        }
        if (clickevent == "left") {
            count--;
            if (count == -1) {
                count = imgarray.length - 1;
            }
            largeimg.src = imgarray[count];
        }

        imgContainer.style.opacity = 1; // Set opacity back to 1 for the fade-in effect
    }, 200); // 200 milliseconds, should match the transition duration in CSS
}

