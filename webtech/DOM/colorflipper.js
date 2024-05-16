
let btn = document.getElementById("btn");
let maincontainer = document.getElementById("maincontainer");
let randomColor;
btn.addEventListener("click",()=>{
    //LIGHT BROWN SHADES
    // let red = Math.floor(Math.random() * (210 - 180 + 1) + 180);
    // let green = Math.floor(Math.random() * (160 - 120 + 1) + 120);
    // let blue = Math.floor(Math.random() * (110 - 80 + 1) + 80);  // Range: 0 to 50

    //ALL COLORS
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    randomColor = `rgb(${red}, ${green}, ${blue})`;

    
    maincontainer.style.backgroundColor = randomColor;
})



