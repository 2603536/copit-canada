// CART SYSTEM
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  const count = cart.length;
  const elements = document.querySelectorAll("#cart-count");
  elements.forEach(el => el.textContent = count);
}

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(name + " added to cart");
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  if (!cartItems) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    cartItems.innerHTML += `<p>${item.name} - $${item.price}</p>`;
  });

  totalEl.textContent = "Total: $" + total;
}

function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
  displayCart();
  updateCartCount();
}

updateCartCount();
displayCart();

// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visible = 100;

    if (elementTop < windowHeight - visible) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
