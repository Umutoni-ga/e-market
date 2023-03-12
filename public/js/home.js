const createProduct = (product) => {
  let productCard = document.createElement("div");
  productCard.innerHTML = `
    <div class="product-card">
    <div class="product-image">
      <img
        src="${product.image}"
        class="product-thumb"
        alt=""
        onclick="viewProductDetails(${product.id})"
      />
      <button class="card-btn add-to-cart-btn" data-id=${product.id}>add to cart</button>
    </div>
    <div class="product-info">
      <h2 class="product-brand">${product.name}</h2>
      <p class="product-short-des">${product.description}</p>
      <span class="price">$${product.price}</span>
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
