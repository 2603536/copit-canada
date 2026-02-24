// CART
function openCart(){
  document.getElementById("cartDrawer").classList.add("open");
}

function closeCart(){
  document.getElementById("cartDrawer").classList.remove("open");
}

// CLOSE ANNOUNCEMENT
function closeAnnouncement(){
  document.getElementById("announcement").style.display = "none";
}

// HIDE ANNOUNCEMENT ON SCROLL
window.addEventListener("scroll", function(){
  const announcement = document.getElementById("announcement");
  if(window.scrollY > 50){
    announcement.style.transform = "translateY(-100%)";
  } else {
    announcement.style.transform = "translateY(0)";
  }
});
