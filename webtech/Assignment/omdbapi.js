console.log("HEY");

    async function demo(){
        // let products = await fetch("https://fakestoreapi.com/products");
		// 		products = await products.json();
		// 		console.log(products);  


        let products = await fetch("https://omdbapi.com/?apikey=a3a0b934&s=avengers");
        console.log(products);
        products = await products.json();
        // products = await products.json();
        console.log(products);
        let search = products.Search;
        console.log(search)

        search.map((movie)=>
        {
                    let productDetails = document.getElementById("productDetails");
                    productDetails.innerHTML +=`<img src=${movie.Poster}/>`
        })

        

        // let productDetails = document.getElementById("productDetails");
        // productDetails.innerHTML +=`<img src=${products.Poster} />`
        // console.log(products.Poster)

    //     products.map((prod)=>
    //     {
    //                 let productDetails = document.getElementById("productDetails");
    //                 productDetails.innerHTML +=`<img src=${prod.Poster} height=80 width=80 />`
    //     })
    }
                	

demo();
