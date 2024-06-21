let shop = document.getElementById("shop");

let shopItemsData = [
    {
        id: "gifgif##",
        name: "Casual Shirt",
        price: 45,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        img: "images/img-1.jpg"      
    }, 
    {
        id: "derder##",
        name: "Casual Shirt",
        price: 45,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        img: "images/img-1.jpg"    
    }, 
    {
        id: "sweswe##",
        name: "Casual Shirt",
        price: 45,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        img: "images/img-1.jpg"
    }, 
    {
        id: "aweawe##",
        name: "Casual Shirt",
        price: 45,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        img: "images/img-1.jpg"
    }];

// Regular function vs ES6 arrow function 
// function abcd () {} - Regular function 
// function abdc = () => {} - ES6 arrow function
// The ES6 arrow function is more advanced than the regular function  

let generateShop = () => {
    return shop.innerHTML = `
    <div class="item">
        <img width="220" src="images/img-1.jpg" alt="">
        <div class="details">
            <h3>Casual Shirt</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div class="price-quantity">
                <h2>$ 45</h2>
                <div class="buttons">
                    <i class="bi bi-dash-lg"></i>
                    <div class="quantity">0</div>
                    <i class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>
    `;
};

generateShop();