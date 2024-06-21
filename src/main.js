let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "gifgif##",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "images/img-1.jpg",
  },
  {
    id: "derder##",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "images/img-2.jpg",
  },
  {
    id: "sweswe##",
    name: "T Shirt",
    price: 25,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "images/img-3.jpg",
  },
  {
    id: "aweawe##",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "images/img-4.jpg",
  },
];

// Regular function vs ES6 arrow function
// function abcd () {} - Regular function
// function abdc = () => {} - ES6 arrow function
// The ES6 arrow function is more advanced than the regular function

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      return `
            <div class="item">
                <img width="220" src="${img}" alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    <div class="price-quantity">
                        <h2>$ ${price}</h2>
                        <div class="buttons">
                            <i class="bi bi-dash-lg"></i>
                            <div class="quantity">0</div>
                            <i class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            `;
    })
    .join(""));
};

generateShop();
