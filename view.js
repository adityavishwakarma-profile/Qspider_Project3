const id = localStorage.getItem("id");
console.log(id);

async function getProducts() {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const products = await response.json();

    console.log(products);
    display(products);
}

function display(products) {

    let details = document.getElementById("product");

    details.innerHTML = `
    <div class="box">

        <div class="leftBox">
            <img src="${products.thumbnail}">
        </div>

        <div class="rightBox">
            <h1>${products.title}</h1>
            <h3><span class="productTitle">Brand:</span> ${products.brand}</h3>
            <h3><span class="productTitle">Category:</span> ${products.category}</h3>
            <p><span class="productTitle">Description:</span> ${products.description}</p>
            <p><span class="productTitle">Rating:</span> ${products.rating}</p>
            <button>Add to Cart</button>
            <button>Add to Wishlist ❤️</button>
        </div>

    </div>
    `;

let reviews = document.getElementById("reviews");

products.reviews.forEach((ele)=>{
    console.log(ele);
    reviews.innerHTML += `
    <div class = "review_card">
    <div class = "reviewHead">
    <h2>${ele.reviewerName}</h2>
    <p>${"🌟".repeat(ele.rating)}</p>
    </div>
    <div id = "comment">
    <p>${ele.comment}</p>
    </div>
    </div>
    `
});
reviews.innerHTML += `
<input id = "newReview" type = "text"/>
<button> Submit Feedback </button>`;

}

getProducts();