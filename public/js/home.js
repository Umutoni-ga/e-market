const createProduct = (product) => {
  let productCard = document.createElement("div");
  productCard.innerHTML = `
    <div class="product-card">
    <div class="product-info">
      <h2 tabindex="0" class="product-brand">${product.name}</h2>
      <p tabindex="0" class="product-short-des">${product.description}</p>
      <span tabindex="0" class="price">$${product.price}</span>
    </div>
    <div class="product-image">
    <figure>
      <img
        src="${product.image}"
        class="product-thumb"
        alt="${product.description}"
        onclick="viewProductDetails(${product.id})"
        tabindex="0"
      />
      <figcaption>${product.description}</figcaption>
      </figure>
      <button class="card-btn add-to-cart-btn" data-id=${product.id} type="button">add to cart</button>
    </div>
    
  </div>`;
  return productCard;
};

let productsContainer = document.querySelector(".product-container");

products?.forEach((product) => {
  let productCard = createProduct(product);
  productsContainer.appendChild(productCard);
});

const addToCartBtn = document.querySelectorAll(".add-to-cart-btn");

addToCartBtn.forEach((btn) =>
  btn.addEventListener("click", ({ target }) => {
    const id = parseInt(target.dataset.id);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.includes(id)) {
      alert("Item already in cart");
      return;
    }
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
    createNav();
  })
);

const viewProductDetails = (id) => {
  localStorage.setItem("currentProduct", id);
  window.location.href = "details.html?product=" + id;
};
