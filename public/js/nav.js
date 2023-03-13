const createNav = () => {
  let nav = document.querySelector(".navbar");
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  nav.innerHTML = `
        <div class="nav">
            <a href="/public/home.html">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            </a>
            <div class="nav-items">                
                <a href="cartDetails.html
                " class="cart-number"><img src="img/cart.png" alt="Click to see cart details. cart items ">${cartItems.length}</a>
                <button onClick="logout()" class="logout-btn">Log Out</button>
            </div>
        </div>
    `;
};

createNav();

const logout = () => {
  localStorage.removeItem("loginStatus");
  localStorage.removeItem("activatedAssistiveTechnologies");
  localStorage.removeItem("cart");
  window.location.href = "login.html";
};
