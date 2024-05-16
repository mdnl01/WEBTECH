let largeimagecontainer=document.querySelector(".largeimagecontainer");
function displaylarge(clickedElement)
{   
    largeimagecontainer.innerHTML = `<img class="largeimage" src="${clickedElement.src}" alt="NO IMAGE AVAILAABLE">`;

}