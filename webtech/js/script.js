// let year = Number(window.prompt("Enter the year"));
// let month = window.prompt("Enter the month");

// switch(month){
//     case ("Jan"||"Mar"||"May"||"Jul"||"Aug"||"Oct"||"Dec"): 
//         console.log(month+" has 31 days");
//         break;
//     case ("Feb"):
//         if((year%4==0&&year%100!=0)||(year%400==0))
//         console.log(month+" has 29 days");
//         else
//         console.log(month+" has 28 days");
//         break;
//     case("Apr"||"Jun"||"Sep"||"Nov"):
//         console.log(month+" has 30 days");
//         break;
//     default:
//         console.log("Invalid input");
// }


let year = Number(window.prompt("Enter the year"));
let monthInput = window.prompt("Enter the month").substring(0, 3).toLowerCase();

// Convert monthInput to lowercase for case-insensitive comparison
let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
let isValidMonth = months.includes(monthInput);

if (isValidMonth) {
    let daysInMonth = new Date(year, months.indexOf(monthInput) + 1, 0).getDate();
    console.log(`${monthInput} has ${daysInMonth} days`);
} else {
    console.log("Invalid month input");
}

