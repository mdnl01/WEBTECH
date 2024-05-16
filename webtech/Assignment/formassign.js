let signupform = document.getElementById("signupform");
// console.log(signupform);
let formData = []; //Will be used at last

if (localStorage.getItem("formData")) {     //Executes only if true
    formData = JSON.parse(localStorage.getItem("formData")); 
}

// & REGISTRATION
signupform.addEventListener("submit",(e)=>{
    e.preventDefault(); //This prevents the form from submitting
let firstname = document.getElementById("firstname").value;
let lastname = document.getElementById("lastname").value;

let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;

let pass = document.getElementById("pass").value;
let repass = document.getElementById("repass").value;

let address=document.getElementById("address").value;
let replace=document.getElementById("replace");



if (firstname == "" || lastname == "") {
    e.preventDefault(); // Prevent form submission if validation fails
    alert("Please Enter both First Name and Last Name");
}
else if (email == "" || phone == "") {
    e.preventDefault(); // Prevent form submission if validation fails
    alert("Email and phone number must not be empty");
}
else if (formData.some((ele) => ele.email === email)) {
    alert("Email already exists");
    e.preventDefault();
}
else if (formData.some((ele) => ele.phone === phone)) {
    alert("Phone Number already exists");
    e.preventDefault();
}

else if (pass==""||repass=="") {
    e.preventDefault(); // Prevent form submission if validation fails
    alert("Password field must not be empty");
}
else if (pass.length<6) {
    e.preventDefault(); // Prevent form submission if validation fails
    alert("Password must be minimum 6 characters");
}
else if (pass !== repass) {
    e.preventDefault(); // Prevent form submission if validation fails
    alert("Passwords do not match");
}
else if (address=="") {
    e.preventDefault(); // Prevent form submission if validation fails
    alert("Address must not be empty");
}


else {
    messageBox=document.getElementById("successreg");
        messageBox.style.visibility = "visible";
        setTimeout(() => {
            messageBox.style.visibility = "hidden";
        }, 5000); // 3000 milliseconds = 3 seconds

    // alert("Form successfully submitted!");
    // console.log( `firstname is ${firstname.value} and lastname is ${lastname.value}`);
    signupform.reset(); // Triggers form reset 

    // Clear the form fields for next entry
    // firstname.value = "";
    // lastname.value = "";
    // email.value == "";
    // ph.value == "";

   formData.push({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        pass:pass,
        address: address,
    });

    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(formData);
}
});
console.log(formData);

// & SIGNIN
let login = document.getElementById("login");


login.addEventListener("click",(e)=>{
    formData = JSON.parse(localStorage.getItem("formData"));
    console.log(formData);
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // console.log(formData[0].email);
    // To check if email exists
    let usernameExists = false;
    let passwordmatch = false;
    formData.forEach((mails) => {
        if (mails.email === username) {
            usernameExists = true;
        }
    });
    
    if (usernameExists) {
        alert("Valid Email");
    } 
    else {
        alert("Invalid Email");
    }
    //To check if password matches
    formData.forEach((passw) => {
        if (passw.pass === password) {
            passwordmatch = true;
        }
    });
    let messageBox=document.getElementById("successlogin");
    if (passwordmatch){
        alert("Password Match");
        replace.innerHTML=`<img src="https://media.tenor.com/lCKwsD2OW1kAAAAj/happy-cat-happy-happy-cat.gif" />`

    } else {
        alert("Incorrect Password");
    }

    if(passwordmatch&&usernameExists){
        messageBox.style.visibility = "visible";
        setTimeout(() => {
            messageBox.style.visibility = "hidden";
        }, 5000); // 3000 milliseconds = 3 seconds
}
})






