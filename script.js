async function getData() {
    try {
        let res = await fetch("https://dummyjson.com/products");
        let data = await res.json();
        const container = document.getElementById("productsContainer");
        for (let i = 0; i < data.products.length; i++) {

            let product = data.products[i];

            //         container.innerHTML += `
            //     <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
            //         <div class="card h-100">
            //             <img src="${product.thumbnail}" class="card-img-top">

            //             <div class="card-body">
            //                 <h5>${product.title}</h5>
            //                 <p>Category: ${product.category}</p>
            //                 <p>Price: $${product.price}</p>
            //             </div>
            //         </div>
            //     </div>
            // `;
                        container.innerHTML += `
                        <div class="card  col-sm-6 col-md-4 col-lg-2 py-2 mb-4 mx-auto " style="width: 18rem;">
                            <img src="${product.thumbnail}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h4 class="card-title">${product.title}</h4>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Category: ${product.category}</li>
                                <li class="list-group-item">Price: $${product.price}</li>
                            </ul>
                            <p class="card-text"><small class="text-body-secondary">Last updated 1 min ago</small></p>
              </div>
                        </div>`
//             container.innerHTML += `
//             <div class="row row-cols-1 row-cols-md-3 g-4">
//   <div class="col">
//     <div class="card h-100">
//       <img src="${product.thumbnail}" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">${product.title}</h5>
//         <ul class="list-group list-group-flush">
//                     <li class="list-group-item">Category: ${product.category}</li>
//                     <li class="list-group-item">Price: $${product.price}</li>
//                      </ul>
//       </div>
//       <div class="card-footer">
//         <small class="text-body-secondary">Last updated 3 mins ago</small>
//       </div>
//     </div>
 
// </div>`

        }

        console.log(data)
    }
    catch (err) {
        console.log("API Failed", err)
    }
}
getData()

document.getElementById("inputvalue").addEventListener("input",function(){
    var input = this.value;
    var cards = document.getElementsByClassName("card");
    for(var i=0; i<cards.length; i++){
        var title = cards[i].getElementsByClassName("card-title")[0].innerText;
        var category = cards[i].getElementsByClassName("list-group-item")[0].innerText;     
        if(title.toLowerCase().includes(input.toLowerCase()) || category.toLowerCase().includes(input.toLowerCase())){
            cards[i].style.display = "block";
        }
        else{
            cards[i].style.display = "none";
        }
    }
    
});

function filterProductsByCategory(category) {
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {

        let cardCategory =
            cards[i].getElementsByClassName("list-group-item")[0].innerText.replace("Category: ", "");
        if (category === "All" || cardCategory === category) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}
