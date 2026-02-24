// CART
function openCart(){
  document.getElementById("cartDrawer").classList.add("open");
}
function closeCart(){
  document.getElementById("cartDrawer").classList.remove("open");
}

// FADE IN ON SCROLL
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      el.classList.add("show");
    }
  });
});

// CURSOR GLOW
const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
