class Product {
  // property here
  title = "DEFAULT";
  imageUrl; //  without definition will return undefined
  description;
  price;
  // working with costructor 😎
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

console.log(new Product());
const productList = {
  products: [
    // this return an Object
    new Product( 
      "A pillow",
      "https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/2019-CARPET-Features-softness.jpg",
      "A soft pillow!",
      19.99
    ),
    new Product( 
        "A Carpet",
        "https://unitedpillow.com/images/companies/2/pillow-thumb.jpg?1564370699038",
        "A soft Carpet!",
      89.99
    ),
   /*
    {
      title: "A pillow",
      imageUrl:
        "https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/2019-CARPET-Features-softness.jpg",
      price: 19.99,
      description: "A soft pillow!",
    },
    
    {
      title: "A Carpet",
      imageUrl:
        "https://unitedpillow.com/images/companies/2/pillow-thumb.jpg?1564370699038",
      price: 89.99,
      description: "A soft Carpet!",
    },
    */
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
            <img src = "${prod.imageUrl}" alt=${prod.title} >
            <div class = product-item__content>
                <h2>${prod.title}</h2>
                <h3>${prod.price} </h3>
                <p>${prod.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
        `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};
productList.render();
