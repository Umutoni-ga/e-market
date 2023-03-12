const getProductDetails = () => {
  let id = localStorage.getItem("currentProduct");
  const product = products.find((product) => product.id == id);

  let brand = product.name;
  let shortDes = product.description;
  let price = product.price;
  let actualPrice = product.actualPrice;
  let img = product.image;

  let productImage = document.getElementById("product-image");
  productImage.src = img;
  let thumbs = document.getElementsByClassName("product-image");
  for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].src = img;
  }
  document.querySelector(".product-brand").textContent = brand;
  document.querySelector(".product-short-des").textContent = shortDes;
  document.querySelector(".product-price").textContent = "$" + price;
  document.querySelector(".add-to-cart-btn").dataset = id;

  if (actualPrice.length != 0) {
    document.querySelector(".product-discount").textContent = "( 50% off )";
  }
};

getProductDetails();

const productImages = document.querySelectorAll(".product-images img"); // selecting all image thumbs
const productImageSlide = document.querySelector(".image-slider"); // seclecting image slider element

let activeImageSlide = 0;

const firstImageSrc = productImages[0].getAttribute("src");
productImageSlide.style.backgroundImage = `url(${firstImageSrc})`;

productImages.forEach((item, i) => {
  // looping through each image thumb
  item.addEventListener("click", () => {
    // adding click event to each image thumbnail
    productImages[activeImageSlide].classList.remove("active"); // removing active class from current image thumb
    item.classList.add("active"); // adding active class to the current or clicked image thumb
    productImageSlide.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
    activeImageSlide = i; // updating the image slider variable to track current thumb
  });
});
// toggle size buttons

const sizeBtns = document.querySelectorAll(".size-radio-btn"); // selecting size buttons
let checkedBtn = 0; // current selected button

sizeBtns.forEach((item, i) => {
  // looping through each button
  item.addEventListener("click", () => {
    // adding click event to each
    sizeBtns[checkedBtn].classList.remove("check"); // removing check class from the current button
    item.classList.add("check"); // adding check class to clicked button
    checkedBtn = i; // upading the variable
  });
});

// listen to the click event on the add to cart button
const addToCartBtn = document.querySelector(".add-to-cart-btn");

addToCartBtn.addEventListener("click", ({target}) => {
  // check if the user is logged in
  const id = parseInt(target.dataset.id)

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if(cart.includes(id)) {
      alert("Item already in cart");
      return;
    }
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
    createNav();
});
