console.log("Hello World");
//Fetches the whole HTML document
console.log(document);
console.log(window.document);//Same as above
console.log(document.head);//
console.log(document.body);
console.log(document.scripts);
console.log(document.para1);//Undefined - cannot access child elements which are not unique to the webpage(body,head,script - accessible)

let para2=document.getElementsByClassName("para2");
console.log(para2);

//! DOM METHODS
//& getElementById()
//Targets only individual element, targets the first occuring element if two elements share the same id name
console.log("ELEMENT BY ID");
let p = document.getElementById("para1");
console.log(p);
//Prints the whole tag

//& getElementsByClassName()
//Targets multiple elements, and returns those elements in the form of an HTML collection.
console.log("ELEMENT BY CLASS");
let p2 = document.getElementsByClassName("para2");
console.log(p2);
//Prints in the form of HTML collection even if single element is targeted
//Prints the HTML collection of the tags, since two tags share the same class


//& getElementsByTagName()
console.log("ELEMENT BY TAG");
//Targets the whole tag and returns the tags in the format of HTML collection
console.log("TagSelector");
console.log(document.getElementsByTagName("div"));
//Prints all the elements with the specified tag

//& querySelector()
// Targets the class or Id
// If multiple class or Id are selected, targets only the first occurance
// Targets only individual element
console.log("Query Selector")
console.log(document.querySelector("div"));
//Returns the whole tag
console.log(document.querySelector(".para4"));
//Returns the whole tag


//& querySelectorAll()
// Targets multiple elements 
// Returns the elements in the form of a NodeList
console.log("Query Selector ALL")
console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll(".para4,.para5"));




//!NEW DOM METHODS
//& .innerHTML
//This property changes the text within the specified element
//The text within the specified element is replaced with the new text
document.getElementById("para1").innerHTML="Changed Text";
document.getElementById("para4").innerHTML="<p>Changed Text</p>";
//The above property will also change the tex and wrap the element with the specified tag.
//Cannot specifiy class name or id to the added tag

para2collection=document.getElementsByClassName("para2");
para2collection[0].innerHTML="Changed text index1"
//The above code will change the content of the element present at index 0 of class "para2"
document.getElementsByClassName("para2")[1].innerHTML = "Changed text index2";

for(let i=0;i<para2collection.length;i++)
{
    para2collection[i].style.color="red";
}
//To make changes to all elements in Collections, use a loop

// document.getElementById("para5.1").innerHTML = "Date : " + Date();
//The above text allows you to add dynamic content to the webpage
//& .innerText
document.getElementById("para5.1").innerText="Para5.1changed";
//Allows changing text within a element
document.getElementById("para5.2").innerText="<p>Para5.2changed</p>";
//Cannot change and wrap and element with another tag, the tag is considered as a string

//& .textContent
//& .style.property
//& document.getElementById(id).attribute ---To change the value of an attribute(src,href,height,width)

// & document.createElement(element)---Create an  HTML element
// & document.removeChild(element)---Remove an HTML element
// & document.appendChild(element)---Add an HTML element
// & document.replaceChild(new, old)---Replace an  HTML element
// & document.write(text)---Write into the HTML output stream


//! EVENT HANDLERS
//& .onclick
//document.getElementById(id).onclick = function(){code}
//& .onHover 


//Adding text, adding elements
let shadd=document.querySelector(".shadow");
function removeshadow(){
    shadd.classList.toggle("shadow");
}

let employees=[
    {
        name:"Walter White",
        designation:"CTO",
        image:"source"
    },
    {
        
    }
]