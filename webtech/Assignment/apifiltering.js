console.log("HEY");
async function getProducts()
{
    let productDetails = document.getElementById("productDetails");
    productDetails.innerHTML ="";
				let products = await fetch("https://fakestoreapi.com/products");
				products = await products.json();
				console.log(products);

				

                let search = document.getElementById("search").value;


                let arr = products.filter((product)=>{
                    // console.log( typeof product.categories)
                    return product.id==search || product.title.toLowerCase().includes(search) || product.category.toLowerCase().includes(search)
                })
                

                arr.map((product)=>{
                    
                    productDetails.innerHTML += `<img src=${product.image} height=80 width=80 />`
                })



                
                	
}


(async function demo(){
    let products = await fetch("https://fakestoreapi.com/products");
    products = await products.json();
    products.map((prod)=>
    {
				let productDetails = document.getElementById("productDetails");
                productDetails.innerHTML +=`<img src=${prod.image} height=80 width=80 />`
    })
})()