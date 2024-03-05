document.addEventListener('DOMContentLoaded',function(){
    let products = document.querySelector(".products")
    async function fetchProducts(url){
        let data = await fetch(url);
        let response = await data.json();
        // console.log(response)

        for(i=0;i<response.length;i++){
            let description = response[i].description
            products.innerHTML += `<div class="product">
                                <img src="${response[i].category.image}" class="product-img">
                                <h4 class="product-title">${response[i].title}</h4>
                                <h4 class="product-category">${response[i].category.name}</h4>
                                <p class="product-description">${description.length > 30 ? description.substring(0,30).concat('..more'): description}</p>
                                <div class="product-price-container">
                                    <h3 class="product-price">${"$"+response[i].price}</h3>
                                    <a href="#" class="add-to-cart"></a>
                                </div>
                             </div>`
        }
        
    };
    fetchProducts("https://api.escuelajs.co/api/v1/products")
})

