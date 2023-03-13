const createProduct = (product) => {
  let productCard = document.createElement("div");
  productCard.innerHTML = `
  <div class="product-card">
  <div class="product-image">
    <img
      src="${product.image}"
      class="product-thumb"
      alt=""
    />
  </div>
  <div class="product-info">
    <h2 tabindex="0" class="product-brand">${product.name}</h2>
    <p tabindex="0" class="product-short-des">${product.description}</p>
    <span tabindex="0" class="price">$${product.price}</span>
    <div>
      <button class="remove-from-cart-btn" data-id=${product.id}>
        remove from cart
      </button>
    </div>
  </div>
</div>`;
  return productCard;
};

display = () => {
  let productsContainer = document.querySelector(".product-container");
  productsContainer.innerHTML = "";
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  productsInCart = products.filter((product) => cartItems.includes(product.id));

  productsInCart?.forEach((product) => {
    let productCard = createProduct(product);
    productsContainer.appendChild(productCard);
  });
};

display();

const removeFromCartBtn = document.querySelectorAll(".remove-from-cart-btn");

removeFromCartBtn.forEach((btn) =>
  btn.addEventListener("click", ({ target }) => {
    const id = parseInt(target.dataset.id);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart.filter((item) => item !== id);

    localStorage.setItem("cart", JSON.stringify(cart));
    createNav();
    display();
  })
);
