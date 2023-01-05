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

class ProductItem{
    constructor(product){
        this.product = product;
    }
    render(){
        const prodEl = document.createElement("li");
        prodEl.className = "product-item";
        prodEl.innerHTML = `
              <div>
                  <img src = "${this.Product.imageUrl}" alt=${this.Product.title} >
                  <div class = product-item__content>
                      <h2>${this.Product.title}</h2>
                      <h3>${this.Product.price} </h3>
                      <p>${this.Product.description}</p>
                      <button>Add to Cart</button>
                  </div>
              </div>
              `;
        return prodEl ; 
    }
}

class ProductList {
  products = [
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
  ];
  constructor() {}
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const product = new ProductItem(prod)
      const prodList = ProductItem.render(); 
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}
console.log(new Product());
const productList = new ProductList();
productList.render();
