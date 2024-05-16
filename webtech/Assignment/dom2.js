let employees=[
    {
        name:"Walter White",
        img:"https://bootstrapmade.com/demo/templates/Presento/assets/img/team/team-1.jpg",
        desig:"CEO"
    },
    {
        name:"Sarah Jhonson",
        img:"https://bootstrapmade.com/demo/templates/Presento/assets/img/team/team-2.jpg",
        desig:"Product Manager"
    },
    {
        name:"William Anderson",
        img:"https://bootstrapmade.com/demo/templates/Presento/assets/img/team/team-3.jpg",
        desig:"CTO"
    },
    {
        name:"Amanda Jhonson",
        img:"https://bootstrapmade.com/demo/templates/Presento/assets/img/team/team-4.jpg",
        desig:"Accountant"
    },
    {
        name:"Walter White",
        img:"https://bootstrapmade.com/demo/templates/Presento/assets/img/team/team-1.jpg",
        desig:"CEO2.0"
    },
    
]

let empdetails=document.querySelector(".sektion");
employees.map((emp)=>{
    {
        empdetails.innerHTML+=`
        <div class="card">
        <div class="cardborder">
            <div id="name">${emp.name}</div>
            <div id="imagecontainer">
                <img id="imge" src=${emp.img} alt="NO IMG" onerror="this.src='https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg'">
            </div>
            <div id="designation">${emp.desig}</div>
        </div>
    </div>`
    }
});




function search() {

    let hidecards = document.querySelectorAll(".card"); //fetches the cards
    let searchText = document.getElementById("search").value.toLowerCase(); //fetches the value of the searchbox
    if (searchText === '') {
        alert("SEARCH FIELD SHOULD NOT BE EMPTY")
        
    }
    employees.map((emp, index) => {
        let card = hidecards[index];
        // if (searchText !== emp.name.toLowerCase()) 
        if(!emp.name.toLowerCase().includes(searchText))
        {     
            card.classList.add("hideclass"); //adds class with display:none
        }
        else {
            card.classList.add("card");
            card.classList.remove("hideclass"); // if card hidden, remove hidden class and add back previous class
        }
        // if(!emp.name.toLowerCase().includes(searchText))
    });
}

