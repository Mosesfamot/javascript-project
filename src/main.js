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

let basket = [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      return `
            <div id="product-id-${id}" class="item">
                <img width="220" src="${img}" alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>$ ${price}</h2>
                        <div class="buttons">
                            <i onclick="decreament(${id})" class="bi bi-dash-lg"></i>
                            <div onclick="update()" id="${id}" class="quantity">0</div>
                            <i onclick="increament(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            `;
    })
    .join(""));
};

generateShop();

let increament = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }

    console.log(basket);
};

let decreament = () => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item -= 1;
    }

    console.log(basket);
};

let update = () => {};
