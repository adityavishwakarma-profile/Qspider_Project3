let allproducts =[];

async function fetchproducts() {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    allproducts = data.products;
    displayProducts(allproducts);
    
    
}
function displayProducts(products){
    const container = document.getElementById("root");
    container.innerHTML = "";
    console.log(products);
    products.forEach((ele)=>{
        const container = document.getElementById("root");
        container.innerHTML +=`
        <div class = "card">
        <div class ="img_container">
        <img src="${ele.thumbnail}" />
        <div class ="main_container"></div>
        
        <h2>${ele.title.slice(0,20).concat("...")}
        <br>
        <i>Price :${ele.price}"</i>
        <br>
        <i>Category :${ele.category}"</i>
        <br>
        <i>Rating :${"🌟".repeat(ele.rating)}"</i>
        <div class="viewcontainer"><a href = "view.html">
    <button onclick="getProduct(${ele.id})">
        View More
    </button></a>
</div>
        </div>
        </div> `
    })
    
}

fetchproducts(``);

let pop =document.getElementById("popup");

let btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    pop.remove();
})



let sea = document.querySelector("#Searchproduct");
sea.addEventListener("input", (eve) => {
    const value = eve.target.value.toLowerCase();

    const filterProducts = allproducts.filter(pro =>
        pro.title.toLowerCase().includes(value)
    );

    displayProducts(filterProducts);
});

function getProduct(id) {
    localStorage.setItem("id", id);
}