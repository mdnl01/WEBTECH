// // console.log("HEY");

//     async function demo(){    
//         let weatherdata = await fetch("https://api.weatherapi.com/v1/current.json?key=3fc05dc1b36043de99a74429241502&q=Bangalore&aqi=no");
//         // console.log(weatherdata);
//         weatherdata = await weatherdata.json();
//         console.log(weatherdata);
//         //Contains location and current object

//         console.log(weatherdata.current)
//         // Contains condition object and (temp and humidity)
//         // console.log(weatherdata.current.condition)
        
//         console.log(weatherdata.location)
//         //Contains country, name, region 
//     }
// demo();



let searchbutton=document.getElementById("searchicon");
 async function weathersearch()
 {

        let searchinput = document.getElementById("searchinput").value;
        console.log(searchinput);

        let weatherdata = await fetch(`https://api.weatherapi.com/v1/current.json?key=3fc05dc1b36043de99a74429241502&q=${searchinput}&aqi=no`);
        weatherdata = await weatherdata.json();
        console.log(weatherdata)
        console.log(weatherdata.current.condition.icon)


    
        let icon = document.getElementById("icon");
        icon.innerHTML= `<img src=${weatherdata.current.condition.icon} />`


        let city = document.getElementById("city")
        city.innerHTML=weatherdata.location.name;

        let icondescription = document.getElementById("icondescription")
        icondescription.innerHTML="Forecast : "+weatherdata.current.condition.text;
        
        let temp = document.getElementById("temp")
        temp.innerHTML=weatherdata.current.temp_c+"°c";

        let humidity = document.getElementById("humidity")
        humidity.innerHTML=weatherdata.current.humidity+" % Humidity";
        
        let state = document.getElementById("state")
        state.innerHTML=weatherdata.location.region;


        
 }
