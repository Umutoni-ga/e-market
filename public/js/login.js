// select login button
const loginBtn = document.querySelector(".login-btn");

// select login form
const loginForm = document.querySelector(".login-form");

// if login button is clicked, save the login status to the local storage

loginBtn.addEventListener("click", () => {
  localStorage.setItem("loginStatus", "loggedIn");
  window.location.href = "home.html";
});
