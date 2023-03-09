const createNav = () => {
  let nav = document.querySelector(".navbar");
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  nav.innerHTML = `
        <div class="nav">
            <a href="/public/home.html">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            </a>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#" class="cart-number"><img src="img/cart.png" alt="">${cartItems.length}</a>
                <button onClick="logout()" class="logout-btn">Log Out</button>
            </div>
        </div>
    `;
};

createNav();

const logout = () => {
  localStorage.removeItem("loginStatus");
  localStorage.removeItem("activatedAssistiveTechnologies");
  window.location.href = "login.html";
};
