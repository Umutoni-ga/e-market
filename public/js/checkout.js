const clearCart = () => {
  localStorage.removeItem("cart");
  createNav();
};

// payment button
const paymentBtn = document.querySelector(".pay-btn");
paymentBtn.addEventListener("click", () => {
  clearCart();
  window.location.href = "home.html";
});
